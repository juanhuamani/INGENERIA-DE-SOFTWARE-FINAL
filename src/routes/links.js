const express = require('express');
const router = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

class LinkController {
    async addLink(req, res) {
        res.render('links/add');
    }

    async saveLink(req, res) {
        const { title, url, description } = req.body;
        const newLink = {
            title,
            url,
            description,
            user_id: req.user.id,
        };
        await pool.query('INSERT INTO links set ?', [newLink]);
        req.flash('success', 'Link Saved Successfully');
        res.redirect('/links');
    }

    async getLinks(req, res) {
        const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [
            req.user.id,
        ]);
        res.render('links/list', { links });
    }

    async deleteLink(req, res) {
        const { id } = req.params;
        await pool.query('DELETE FROM links WHERE ID = ?', [id]);
        req.flash('success', 'Link Removed Successfully');
        res.redirect('/links');
    }

    async editLink(req, res) {
        const { id } = req.params;
        const links = await pool.query('SELECT * FROM links WHERE id = ?', [id]);
        console.log(links);
        res.render('links/edit', { link: links[0] });
    }

    async updateLink(req, res) {
        const { id } = req.params;
        const { title, description, url } = req.body;
        const newLink = {
            title,
            description,
            url,
        };
        await pool.query('UPDATE links set ? WHERE id = ?', [newLink, id]);
        req.flash('success', 'Link Updated Successfully');
        res.redirect('/links');
    }
}

const linkController = new LinkController();

router.get('/add', linkController.addLink);
router.post('/add', linkController.saveLink);
router.get('/', isLoggedIn, linkController.getLinks);
router.get('/delete/:id', linkController.deleteLink);
router.get('/edit/:id', linkController.editLink);
router.post('/edit/:id', linkController.updateLink);

module.exports = router;
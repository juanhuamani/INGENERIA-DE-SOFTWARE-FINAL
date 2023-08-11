const express = require('express');
const router = express.Router();
const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

class eventController {
    async addLink(req, res) {
        res.render('events/add');
    }

    async saveLink(req, res) {
        const { title, url, description } = req.body;
        const newLink = {
            title,
            url,
            description,
            user_id: req.user.id,
        };
        await pool.query('INSERT INTO events set ?', [newLink]);
        req.flash('success', 'Event Saved Successfully');
        res.redirect('/events');
    }

    async getevents(req, res) {
        const events = await pool.query('SELECT * FROM events WHERE user_id = ?', [
            req.user.id,
        ]);
        res.render('events/list', { events });
    }

    async deleteLink(req, res) {
        const { id } = req.params;
        await pool.query('DELETE FROM events WHERE ID = ?', [id]);
        req.flash('success', 'Event Removed Successfully');
        res.redirect('/events');
    }

    async editLink(req, res) {
        const { id } = req.params;
        const events = await pool.query('SELECT * FROM events WHERE id = ?', [id]);
        console.log(events);
        res.render('events/edit', { link: events[0] });
    }

    async updateLink(req, res) {
        const { id } = req.params;
        const { title, description, url } = req.body;
        const newLink = {
            title,
            description,
            url,
        };
        await pool.query('UPDATE events set ? WHERE id = ?', [newLink, id]);
        req.flash('success', 'Event Updated Successfully');
        res.redirect('/events');
    }
}

const eventController = new eventController();

router.get('/add', eventController.addLink);
router.post('/add', eventController.saveLink);
router.get('/', isLoggedIn, eventController.getevents);
router.get('/delete/:id', eventController.deleteLink);
router.get('/edit/:id', eventController.editLink);
router.post('/edit/:id', eventController.updateLink);

module.exports = router;
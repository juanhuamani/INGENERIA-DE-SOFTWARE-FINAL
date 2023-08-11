const express = require('express');
const router = express.Router();

// pool es nuestro db
const pool = require('../database');
const { isLoggedIn} = require('../lib/auth');

router.get('/add', isLoggedIn,(req, res) => {
    res.render('events/add');
});

router.post('/add', isLoggedIn,async (req, res) => {
    const { title, url, description } = req.body;
    const newEvent = {
        title,
        url,
        description,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO events SET ?', [newEvent]);
    req.flash('success', 'Evento guardado con exito');
    res.redirect('/events');
});


router.get('/', isLoggedIn,async (req, res) => {
    const events = await pool.query('SELECT * FROM events WHERE user_id = ?', [req.user.id]);
    console.log(events);
    res.render('events/list', { events });
});

router.get('/delete/:id', isLoggedIn, async(req,res) =>{
    const { id } = req.params;
    await pool.query('DELETE FROM events WHERE ID = ?', [id])
    req.flash('success', 'events Removed successfully');
    res.redirect('/events');
});

router.get('/edit/:id', isLoggedIn, async(req,res) =>{
    const { id } = req.params;
    const events = await pool.query('SELECT * FROM events WHERE id = ?', [id]);    
    res.render('events/edit', {event: events[0]});
});

router.post('/edit/:id', isLoggedIn, async(req,res) =>{
    const { id } = req.params;
    const { title, description, url } = req.body;
    const newEvent = {
        title,        
        description,
        url
    };
    console.log(newEvent);
    await pool.query('UPDATE events set ? WHERE id = ?', [newEvent, id]);    
    req.flash('success', 'Evento Actualizado con exito');
    res.redirect('/events');
});

module.exports = router;

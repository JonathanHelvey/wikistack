const express = require("express");
const router = express.Router();
const addPage = require('../views/addPage')
const { Page } = require("../models");

function generateSlug(title) {
    return title.replace(/\s+/g, "_").replace(/\W/g, "");
}

module.exports = router;

router.get('/add', (req, res, next) => {
    res.send(addPage())
});

router.get('/', (req, res, next) => {
    res.send('got to GET /wiki/');
});

router.post('/', async(req, res, next) => {
    // STUDENT ASSIGNMENT:
    // add definitions for `title` and `content`

    const page = new Page({
        title: req.body.title,
        content: req.body.content
    });

    page.beforeCreate((title) => {
        page.slug = generateSlug(title);
    });
    // make sure we only redirect *after* our save is complete!
    // note: `.save` returns a promise.
    try {
        await page.save();
        res.redirect('/');
    } catch (error) { next(error) }
});
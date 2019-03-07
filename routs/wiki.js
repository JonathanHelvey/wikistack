const express = require("express");
const router = express.Router();
const addPage = require('../views/addPage')

module.exports = router;

router.get('/add', (req, res, next) => {
    res.send(addPage())
});

router.get('/', (req, res, next) => {
    res.send('got to GET /wiki/');
});

router.post('/', (req, res, next) => {
    res.send('got to POST /wiki/')
});



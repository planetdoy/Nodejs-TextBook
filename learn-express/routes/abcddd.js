const express = require('express');

const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send('GET /abc');
    })
    .post((req, res) => {
        res.send('POST /abc');
    });

module.exports = router;

const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils.js');





router.get('/feed', (req, res) => {
    res.render('feed');
});





module.exports = router;

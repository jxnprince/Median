const express = require('express');
const router = express.Router();
const { csrfProtection } = require('../utils')

// //GET localhost:8080/stories/submit-story || working
router.get('/submit-story', csrfProtection, (req, res) => {
    //displays a form to submit a new story
    res.render('submitStory', { csrfToken: req.csrfToken() })
})

module.exports = router
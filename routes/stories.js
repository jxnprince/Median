const express = require('express');
const router = express.Router();
const {
    csurfProtection
} = require('../utils')

//GET localhost:8080/stories/submit-story || working

router.get('/submit-story', csurfProtection, (req, res) => {
    //displays a form to submit a new story
    res.render('pugFile', {
        csrfToken: req.csrfToken()
    })
})
module.exports = router

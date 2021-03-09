const express = require('express');
const router = express.Router();

//GET localhost:8080/stories/submit-story

router.get('/submit-story', (req, res) => {
    res.json({
        test: 'this is a test get route to stories/submit-story'
    })
})
module.exports = router

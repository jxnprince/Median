const express = require('express');
const router = express.Router();

//GET localhost:8080/stories/submit-story || working

router.get('/submit-story', (req, res) => {
    //displays a form to submit a new story
    res.json({
        test: 'this is a test get route to stories/submit-story'
    })
})
module.exports = router

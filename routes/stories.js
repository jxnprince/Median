const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils')


//GET localhost:8080/stories/submit-story || working
router.get('/submit-story', csrfProtection, (req, res) => {
    //displays a form to submit a new story
    res.render('submitStory', { csrfToken: req.csrfToken() })
})





router.get('/:id(\\d+)', csrfProtection, asyncHandler(async(req, res) => {
    const id = req.params.id
    let isUser;


    if (req.session.auth.userId === Number(id)) {
        isUser = true;

    } else if(req.session.auth.userId !== Number(id)) {
        isUser = false;

    }

    res.render('singlestory', { isUser , apiNumber: id, csrfToken: req.csrfToken() })
}))




router.get('/edit/:storyId(\\d+)', (req, res)=> {
    const userId = req.session.auth.userId
    const storyId = req.params.storyId

    res.render('editStory', { userId, storyId });
});




module.exports = router

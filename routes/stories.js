const express = require('express');
const router = express.Router();
const {
    csrfProtection,
    asyncHandler
} = require('../utils')
const axios = require('axios')
const {
    Story
} = require('../db/models')

// //GET localhost:8080/stories/submit-story || working
router.get('/submit-story', csrfProtection, (req, res) => {
    //displays a form to submit a new story
    res.render('submitStory', {
        csrfToken: req.csrfToken()
    })
})

//maybe add csrf for comments
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    console.log('=============', id);

    // var config = {
    //     method: 'get',
    //     url: '/api/stories/1',
    //     headers: {},
    //     data: data
    // };

    // const response = await axios(config)
    // try {
    //     const response = await axios.get(`/api/stories/${id}`)
    //     console.log(response);
    // } catch (e) {
    //     console.log('---------------------------');
    //     console.error(e)
    // }
    const userId = req.params.userId
    let isUser;
    if (req.session.auth.userId === Number(id)) isUser = true;

    res.render('singlestory', {
        isUser,
        apiNumber: id
        // data
    })
}))

router.get('/edit/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const story = await Story.findByPk(req.params.id)
    console.log(story.toJSON())
    res.render('editStory', {
        csrfToken: req.csrfToken(),
        story
    })
}))

module.exports = router

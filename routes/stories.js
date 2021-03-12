const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils')
const axios = require('axios')

// //GET localhost:8080/stories/submit-story || working
router.get('/submit-story', csrfProtection, (req, res) => {
    //displays a form to submit a new story
    res.render('submitStory', { csrfToken: req.csrfToken() })
})

//maybe add csrf for comments
router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const id = req.params.id
    try {
        const data = await axios.get(`/api/stories/${id}`)
        const result = await data.toJSON()
        console.log(result)
    } catch (e) {
        console.error(e)
    }
    // const userId = req.params.userId
    let isUser;
    if (req.session.auth.userId === Number(id)) isUser = true;

    res.render('singlestory', { isUser , apiNumber: id })
}))

router.get('/edit/:id(\\d+)', csrfProtection, (req, res)=> {
    res.render('editStory', { csrfToken: req.csrfProtection() })
})

module.exports = router
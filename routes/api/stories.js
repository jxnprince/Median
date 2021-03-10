const express = require('express');
const router = express.Router();
const {
    csrfProtection,
    asyncHandler
} = require('../../utils');
const {
    check,
    validationResult
} = require('express-validator');
const {
    Story
} = require('../../db/models')
//GET localhost:8080/api/stories/ || works
router.get('/', csrfProtection, asyncHandler(async (req, res) => {
    //return a list of the most recent stories
    const mostRecentStories = await Story.findAll({
        attributes: ['createdAt'],
        order: [
            ['createdAt', 'DESC']
        ]
    })
    res.render('pugfile', {
        mostRecentStories
    })
}))
//POST localhost:8080/api/stories/ || works
router.post('/', createStoryValidator, asyncHandler((req, res) => {
    //submits a story via a form
    //submitted stories will then populate the general feed?
    const {
        imgUrl,
        postBody,
        title,
        userId
    } = req.body
    const validationErrors = validationResult(res);

    const story = await Story.create({
        imgUrl,
        postBody,
        title,
        userId
    })

    //needs to be finished i'm sleepy

}))
//GET localhost:8080/api/stories/:id || works
router.get('/:id', (req, res) => {
    //test that you are pulling the id paramater
    //return a list of the most recent stories by a user.
    res.json({
        test: "this is a get request to api/stories/:id"
    })
})

//DELETE localhost:8080/api/stories/:id || works
router.delete('/:id', (req, res) => {
    //test to make sure thet id paramater is being deleted
    //deletes a specific user story
    //user must own the story to delete.
    res.json({
        test: "this is a delete request to api/stories/:id"
    })
})
//PUT localhost:8080/api/stories/:id || works
router.put('/:id', (req, res) => {
    //updates a specific user story
    res.json({
        test: "this is a put request to api/stories/:id"
    })
})



module.exports = router;

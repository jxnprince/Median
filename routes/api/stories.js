const express = require('express');
const router = express.Router();
const {
    Story,
    User
} = require('../../db/models')
const {
    csrfProtection,
    asyncHandler
} = require('../../utils');
const {
    check,
    validationResult
} = require('express-validator');

// GET localhost:8080/api/stories/ || works
router.get('/', csrfProtection, asyncHandler(async (req, res) => {
    //return a list of the most recent stories
    const mostRecentStories = await Story.findAll({
        order: [
            ['createdAt']
        ]
    })
    if (mostRecentStories) {
        res.json({
            mostRecentStories,
            message: "Stories"
        })
    } else {
        res.json('Story not found')
    }
}))

//POST localhost:8080/api/stories/ || works
router.post('/', /*createStoryValidator,*/ asyncHandler(async (req, res) => {
    //submits a story via a form
    //submitted stories will then populate the general feed?
    const {
        imgUrl,
        postBody,
        title,
        userId
    } = req.body
    // const validationErrors = validationResult(res);

    const story = await Story.create({
        imgUrl,
        postBody,
        title,
        userId
    })
    if (story) {
        res.json({
            message: "You created a new story",
            story
        })
    } else {
        res.json({
            message: "Story not created"
        })
    }
}))
//GET localhost:8080/api/stories/:id || works
router.get('/:id', asyncHandler(async (req, res) => {
    //test that you are pulling the id paramater
    //return a list of the most recent stories by a user.
    const {
        userId
    } = req.params.id;

    const userStories = await Story.findAll({
        where: {
            userId
        },
    });
    res.json(userStories)
}))

//DELETE localhost:8080/api/stories/:id || works
router.delete('/:id', (req, res) => {
    //test to make sure thet id paramater is being deleted
    //deletes a specific user story
    //user must own the story to delete.

})
//PUT localhost:8080/api/stories/:id || works
router.put('/:id', csrfProtection, asyncHandler(async (req, res) => {
    //updates a specific user story
    const {
        storyId
    } = req.params;
    const updatedStory = await Story.findOne({
        where: {
            id: storyId
        }
    })
    res.json({
        post: updatedStory
    })
}))



module.exports = router;

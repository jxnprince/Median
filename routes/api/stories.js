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


//!Get X number of stories by userID
// GET localhost:8080/api/stories?userId=<userID>&limit=<X>
// GET localhost:8080/api/stories/ || works
router.get(
    '/',
    csrfProtection,
    asyncHandler(async (req, res) => {
        const {
            userId,
            limit
        } = req.query
        const params = {
            order: [
                ['createdAt']
            ],
            limit,
        }
        if (userId !== undefined) params.where = {
            userId
        }
        const mostRecentStories = await Story.findAll(params)
        //return a list of the most recent stories
        if (mostRecentStories) {
            res.json({
                mostRecentStories,
                message: 'Stories',
            })
        } else {
            res.json('Story not found')
        }
    })
)
//return a list of the most recent stories


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
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    //test that you are pulling the id paramater
    //return a list of the most recent stories by a user.
    const storyId = req.params.id;

    const userStories = await Story.findByPk(storyId);
    res.json(userStories)
}))

//DELETE localhost:8080/api/stories/:id || works
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const story = await Story.findByPk(req.params.id)
    await story.destroy()
    if (story) {
        res.json({
            message: 'error'
        })
    } else {
        res.json({
            message: 'story was deleted'
        })
    }
}))
//PUT localhost:8080/api/stories/:id || works
router.put('/:id', asyncHandler(async (req, res) => {
    //updates a specific user story
    const storyId = req.params.id
    const {
        imgUrl,
        postBody,
        title
    } = req.body

    const updatedStory = await Story.findByPk(storyId)
    updatedStory.update({
        imgUrl,
        postBody,
        title
    })
    if (updatedStory) {
        res.json({
            message: "You updated a story",
            updatedStory
        })
    } else {
        res.json({
            message: "Story was not updated"
        })
    }
}))



module.exports = router;

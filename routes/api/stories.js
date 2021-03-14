const express = require('express');
const router = express.Router();
const {
    Story,
    User
} = require('../../db/models')
const {
    csrfProtection,
    asyncHandler,
    createStoryValidator
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
router.post('/', createStoryValidator, csrfProtection, asyncHandler(async (req, res) => {
    //submits a story via a form
    //submitted stories will then populate the general feed?
    const {
        imgUrl,
        postBody,
        title,
        userId
    } = req.body
    // const validationErrors = validationResult(res);

    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {

        const story = await Story.create({
            imgUrl,
            postBody,
            title,
            userId: req.session.auth.userId
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
    } else {
        // console.log(`You hit the story registration error route`)
        const errors = validationErrors.array().map((error) => error.msg);
        res.render('submitStory', {
            errors,
            csrfToken: req.csrfToken(),
        });
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
    try {
        const story = await Story.findByPk(req.params.id)
        if (story) {
            const response = await story.destroy()
            if (!response.length) {
                console.log('=================== DELETED')
                res.redirect(303, '/feed')
            } else {
                console.log('============XXXXXXX NOT DELETED')
            }
        }

    } catch (error) {
        console.log('============XXXXXXX NOT DELETED', error)
    }
}))
//PUT localhost:8080/api/stories/:id || works
router.post('/:id(\\d+)', csrfProtection, createStoryValidator, asyncHandler(async (req, res) => {
    //updates a specific user story
    const storyId = req.params.id
    // console.log(req.body);
    const {
        postBody,
        title
    } = req.body

    // console.log(storyId, postBody, title);
    const validationErrors = validationResult(req)

    const story = await Story.findByPk(storyId)
    // console.log(story);
    if (validationErrors.isEmpty()) {
        story.update({
            postBody,
            title
        })
        if (story) {
            res.render('singlestory', {
                apiNumber: storyId
            })
        } else {
            res.render({
                message: "Story was not updated"
            })
        }
    } else {
        // console.log(`You hit the story registration error route`)
        const errors = validationErrors.array().map((error) => error.msg);
        res.render('editStory', {
            errors,
            story,
            csrfToken: req.csrfToken()
        });
    }
    // res.send('data')
}))



module.exports = router;

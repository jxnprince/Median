const express = require('express');
const router = express.Router();
const { Story, User } = require('../../db/models')
const { csrfProtection, asyncHandler, createStoryValidator, updateStoryValidator } = require('../../utils');
const { check, validationResult } = require('express-validator');




//!Get X number of stories by userID
// GET localhost:8080/api/stories?userId=<userID>&limit=<X>
// GET localhost:8080/api/stories/ || works
router.get('/', csrfProtection, asyncHandler(async (req, res) => {

    const mostRecentStories = await Story.findAll({ order: [['createdAt']], limit: 5 });
        //return a list of the most recent stories
        if (mostRecentStories) {
            res.json({ mostRecentStories });
        } else {
            res.json({
                message: "Error, Server Error.",
                status: 500,
                stack: "Server Error"
            });
        }
    })
)
//return a list of the most recent stories






//POST localhost:8080/api/stories/ || works
router.post('/', createStoryValidator, csrfProtection, asyncHandler(async (req, res) => {
    const { imgUrl, postBody, title } = req.body;
    const id = req.session.auth.userId;
    // const validationErrors = validationResult(res);

    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
        const story = await Story.create({ imgUrl, postBody, title, userId: id });

        if (story) {
            res.json({
                message: "You created a new story",
                story
            });

        } else {
            res.json({
                message: "Story not created"
            });
        }

    } else{
        console.log(`You hit the story registration error route`)
        const errors = validationErrors.array().map((error) => error.msg);
        res.render('submitStory', { errors, csrfToken: req.csrfToken() });

    }

}));









//GET localhost:8080/api/stories/:id || works
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const storyId = req.params.id;
    const userStories = await Story.findByPk(storyId);
    res.json(userStories)
}));












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









//updates a specific user story

//PUT localhost:8080/api/stories/:storyId/users/:userId
router.put('/:storyId(\\d+)/users/:userId(\\d+)', updateStoryValidator, asyncHandler(async (req, res) => {
    const storyId = req.params.storyId;
    const userId = req.params.userId;

    const { the_story_img, the_story_post, the_title } = req.body;

    const validationErrors = validationResult(req);

    if (validationErrors.errors.length === 0) {
        const updatedStory = await Story.findByPk(storyId, {
            where: { userId },
        });


        if (updatedStory) {
            updatedStory.update({
                imgUrl: the_story_img,
                postBody: the_story_post,
                title: the_title,
                updatedAt: new Date()
            });

            res.json({
                message: "You updated a story",
                updatedStory
            });


        } else {
            res.json({
                message: "Story was not updated"
            });

        }
    } else {

        console.log(`You hit the story registration error route`)

        const errors = validationErrors.array().map((error) => error.msg);
        res.render('editStory', { errors });
    }
}));




// used to prepopulate the edit story form
router.get('/:storyId(\\d+)/users/:userId(\\d+)', asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const storyId = req.params.storyId;

    const the_story = await Story.findByPk(storyId, { where: { userId } });

    if (the_story) {
        res.json({ the_story });
    } else {
        res.json({ status: 404 });
    }


}));





module.exports = router;

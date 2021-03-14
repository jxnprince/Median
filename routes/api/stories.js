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
            res.redirect('/users')

        } else {
            res.json({
                message: "Story not created"
            });
        }

    } else{
        console.log(`You hit the story registration error route`)
        const errors = validationErrors.array().map((error) => error.msg);
        console.log(validationErrors);
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







// must be here because the put will assign any errors to the updateStoryErrors
let updateStoryErrors = [];
//updates a specific user story

//PUT localhost:8080/api/stories/:storyId/users/:userId
router.put('/:storyId(\\d+)/users/:userId(\\d+)', updateStoryValidator, asyncHandler(async (req, res) => {
    const storyId = req.params.storyId;
    const userId = req.params.userId;
    const session = req.session.auth;

    const { the_story_img, the_story_post, the_title } = req.body;

    const validationErrors = validationResult(req);


    if (validationErrors.errors.length === 0) {
        const updatedStory = await Story.findByPk(storyId, { where: { userId }, });

        if (updatedStory && session) {
                updatedStory.update({
                    imgUrl: the_story_img,
                    postBody: the_story_post,
                    title: the_title,
                    updatedAt: new Date()
                });

            res.status(200).send();
        }

    } else {

        console.log(`You hit the story registration error route`)

        const errors = validationErrors.array().map((error) => error.msg);
        updateStoryErrors = errors;
        res.status(404).send();
        res.render('editStory');
    }
}));


// used to display specific errors to the user for updating their story
router.get('/errors', updateStoryErrors, asyncHandler(async (req, res) => {
    if(updateStoryErrors.length > 0){
        res.json({updateStoryErrors});
    } else if(updateStoryErrors.length === 0) {
        res.json({ message: "There are no validation errors."});
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

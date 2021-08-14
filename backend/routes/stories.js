const { express, asyncHandler, User, Story } = require('../lib');

const { validationResult } = require('express-validator');

const router = express.Router();






// GET localhost:8080/api/stories/
router.get('/', asyncHandler(async (req, res) => {

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






//POST localhost:8080/api/stories/
router.post('/', asyncHandler(async (req, res) => {
    const { imgUrl, postBody, title } = req.body;
    const id = req.session.auth.userId;
    // const validationErrors = validationResult(res);

    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
        const story = await Story.create({ imgUrl, postBody, title, userId: id });

        if (story) {
            res.redirect('/users/profile')

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









//GET localhost:5000/api/stories/:id
router.get('/:id(\\d+)', asyncHandler(async (request, response) => {
    const storyId = request.params.id;
    const userStories = await Story.findByPk(storyId, {
        include: {
            model: User,
            as: "UserLikes",
            attributes: ["firstName", "lastName", "avatar"]
        }
    });



    response.json({ story: userStories });


}));












//DELETE localhost:8080/api/stories/:id
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const story = await Story.findByPk(req.params.id)
    const destroy = await story.destroy()
    console.log(destroy)
    if (destroy === []) res.json({ message: 'error'})
    else res.json({message: 'Success'})
}))







// must be here because the put will assign any errors to the updateStoryErrors
let updateStoryErrors = [];
//updates a specific user story

//PUT localhost:8080/api/stories/:storyId/users/:userId
router.put('/:storyId(\\d+)/users/:userId(\\d+)', asyncHandler(async (req, res) => {
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

const { express, asyncHandler, User, Story } = require('../lib');

const { validationResult } = require('express-validator');

const router = express.Router();






// GET localhost:8080/api/stories/
router.get('/', asyncHandler(async (request, response) => {

    const mostRecentStories = await Story.findAll({ order: [['createdAt']], limit: 5 });
        //return a list of the most recent stories
        if (mostRecentStories) {
            response.json({ mostRecentStories });
        } else {
            response.json({
                message: "Error, Server Error.",
                status: 500,
                stack: "Server Error"
            });
        }
    })
)
//return a list of the most recent stories






//POST localhost:5000/api/stories/:userId
router.post('/:userId(\\d+)', asyncHandler(async (request, response) => {
    const { imgUrl, postBody, title } = request.body;
    const userId = request.params.userId;
    const story = await Story.create({ imgUrl, postBody, title, userId });

    response.json({ story });

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
router.delete('/:id(\\d+)', asyncHandler(async (request, response) => {
    const story = await Story.findByPk(request.params.id)
    const destroy = await story.destroy()
    console.log(destroy)
    if (destroy === []) response.json({ message: 'error'})
    else response.json({message: 'Success'})
}))







// must be here because the put will assign any errors to the updateStoryErrors
let updateStoryErrors = [];
//updates a specific user story

//PUT localhost:8080/api/stories/:storyId/users/:userId
router.put('/:storyId(\\d+)/users/:userId(\\d+)', asyncHandler(async (request, response) => {
    const storyId = request.params.storyId;
    const userId = request.params.userId;
    const session = request.session.auth;

    const { the_story_img, the_story_post, the_title } = request.body;

    const validationErrors = validationResult(request);


    if (validationErrors.errors.length === 0) {
        const updatedStory = await Story.findByPk(storyId, { where: { userId }, });

        if (updatedStory && session) {
                updatedStory.update({
                    imgUrl: the_story_img,
                    postBody: the_story_post,
                    title: the_title,
                    updatedAt: new Date()
                });

            response.status(200).send();
        }

    } else {

        console.log(`You hit the story registration error route`)

        const errors = validationErrors.array().map((error) => error.msg);
        updateStoryErrors = errors;
        response.status(404).send();
        response.render('editStory');
    }
}));


// used to display specific errors to the user for updating their story
router.get('/errors', updateStoryErrors, asyncHandler(async (request, response) => {
    if(updateStoryErrors.length > 0){
        response.json({updateStoryErrors});
    } else if(updateStoryErrors.length === 0) {
        response.json({ message: "There are no validation errors."});
    }
}));




// used to prepopulate the edit story form
router.get('/:storyId(\\d+)/users/:userId(\\d+)', asyncHandler(async (request, response) => {
    const userId = request.params.userId;
    const storyId = request.params.storyId;

    const the_story = await Story.findByPk(storyId, { where: { userId } });

    if (the_story) {
        response.json({ the_story });
    } else {
        response.json({ status: 404 });
    }


}));





module.exports = router;

const { express, asyncHandler, User, Story } = require('../lib');

const { validationResult } = require('express-validator');

const router = express.Router();





// shows the most recently created stories and set a limit to 5
// GET localhost:5000/api/stories/
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



// get all of the stories created by a logged in user
// GET localhost:5000/api/stories/:userId
router.get('/:userId(\\d+)', asyncHandler(async (request, response) => {
    const userId = request.params.userId;
    const stories = await Story.findAll({
        where: { userId },
        order: [['createdAt']]
    });

    // normalize the backend
    const result = {};
    stories.forEach(eachStory => {
        result[eachStory.id] = eachStory;
    });


    response.json({ stories: result });
}));






//POST localhost:5000/api/stories/:userId
router.post('/:userId(\\d+)', asyncHandler(async (request, response) => {
    const { imgUrl, postBody, title } = request.body;
    const userId = request.params.userId;
    const story = await Story.create({ imgUrl, postBody, title, userId });

    response.json({ story });

}));







// get a specific story by its storyId

//GET localhost:5000/api/stories/specific/:id
router.get('/specific/:id(\\d+)', asyncHandler(async (request, response) => {
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










//DELETE localhost:5000/api/stories/:id

router.delete('/:id(\\d+)', asyncHandler(async (request, response) => {
    const story = await Story.findByPk(request.params.id)
    const destroy = await story.destroy()
    console.log(destroy)
    if (destroy === []) response.json({ message: 'error'})
    else response.json({message: 'Success'})
}))









//updates a specific user story
//PUT localhost:5000/api/stories/:storyId
router.put('/:storyId(\\d+)', asyncHandler(async (request, response) => {
    const storyId = request.params.storyId;
    const { imgUrl, postBody, title } = request.body;

    const updatedStory = await Story.findByPk(storyId);

    updatedStory.update({ imgUrl, postBody, title, updatedAt: new Date() });

    response.json({ story: updatedStory });

}));








module.exports = router;

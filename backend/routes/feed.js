const { express, asyncHandler, User, Story, Comment } = require('../lib');





const router = express.Router();


// GET localhost:5000/api/feed/:userId
router.get("/:userId(\\d+)", asyncHandler(async (request, response) => {
    const userId = request.params.userId;

    const user = await User.findByPk(userId);

    const allStories = await Story.findAll({
        order: [["createdAt"] /*"Like"*/],
        include: [
            {
                model: Comment,
                attributes: ["body", "createdAt"],
                include: {
                    model: User,
                    attributes: ["firstName", "lastName", "avatar"]
                }
            },
            {
                model: User,
                as: "UserLikes",
                attributes: ["firstName", "lastName", "avatar"]
            },
            {
                model: User,
                attributes: ["firstName", "lastName", "avatar"]
            }
        ]
    });


// need to figure out how to get the number of likes associated with an story
    const result = {};
    allStories.forEach(eachStory => {
        result[eachStory.id] = eachStory;
    })

    response.json({ featuredStories: result });


}));




module.exports = router;

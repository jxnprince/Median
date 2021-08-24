const { express, asyncHandler, User, Story, Comment } = require('../lib');





const router = express.Router();


// GET localhost:5000/api/feed
router.get("", asyncHandler(async (request, response) => {

    const allStories = await Story.findAll({
        order: [["createdAt"]],
        include: [
            {
                model: Comment,
                attributes: ["body", "createdAt"],
                include: {
                    model: User,
                    attributes: ["firstName", "lastName", "avatar", "id"]
                }
            },
            {
                model: User,
                as: "UserLikes",
                attributes: ["firstName", "lastName", "avatar", "id"]
            },
            {
                model: User,
                attributes: ["firstName", "lastName", "avatar", "id"]
            }
        ]
    });


    const result = {};
    allStories.forEach(eachStory => {
        result[eachStory.id] = {
            comments: eachStory.Comments.length,
            likes: eachStory.UserLikes.length,
            createdAt: eachStory.createdAt,
            id: eachStory.id,
            imgUrl: eachStory.imgUrl,
            postBody: eachStory.postBody,
            title: eachStory.title,
            updatedAt: eachStory.updatedAt,
            user: eachStory.User
        };
    });


    response.json({ featuredStories: result });


}));




module.exports = router;

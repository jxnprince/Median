const { express, asyncHandler, User, Story, Comment } = require('../lib');





const router = express.Router();


// GET localhost:5000/api/feed
router.get("", asyncHandler(async (request, response) => {

    const allStories = await Story.findAll({
        order: [["createdAt"] /*"Like"*/],
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


// need to figure out how to get the number of likes associated with an story


    response.json({ featuredStories: allStories });


}));




module.exports = router;

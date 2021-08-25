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



    const featuredStories = [];
    allStories.forEach(eachStory => {
        featuredStories.unshift({
            comments: eachStory.Comments.length,
            likes: eachStory.UserLikes.length,
            createdAt: eachStory.createdAt,
            id: eachStory.id,
            imgUrl: eachStory.imgUrl,
            postBody: eachStory.postBody,
            title: eachStory.title,
            updatedAt: eachStory.updatedAt,
            user: eachStory.User
            })
    });
    // shift off the first one because the 'featured story will be shown in a
    // different slice in the reducer
    featuredStories.shift();


    const mostRecent = allStories.pop();
    const featured = {
        comments: mostRecent.Comments.length,
        likes: mostRecent.UserLikes.length,
        createdAt: mostRecent.createdAt,
        id: mostRecent.id,
        imgUrl: mostRecent.imgUrl,
        postBody: mostRecent.postBody,
        title: mostRecent.title,
        updatedAt: mostRecent.updatedAt,
        user: mostRecent.User
    };



    response.json({ featuredStories, featured });


}));




module.exports = router;

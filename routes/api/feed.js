const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('../../utils.js');
const { User, Story, Like, Comment } = require('../../db/models');
const { capitalizeFirstChar } = require('../../utils.js');




router.get("/", asyncHandler(async (req, res) => {
    const session = req.session.auth;

    if(session) {
        const user = await User.findByPk(session.userId);

        const allStories = await Story.findAll({
            order: [["createdAt"] /*"Like"*/],
            include: [
                Comment,
                {
                    model: User,
                    as: "UserLikes",
                    attributes: ["firstName", "lastName", "avatar"]
                }
            ]
        });

// need to figure out how to get the number of likes associated with an story


        const authors_array = allStories.map(async (eachStory) => {
                const eachUser = await User.findByPk(eachStory.userId);
                return eachUser;
            });



        res.json({
            message: "Success, is an authorized user.",
            status: 200,
            stack: "Authorized",
            current_user: {
                id: user.id,
                firstName: capitalizeFirstChar(user.firstName),
                lastName: capitalizeFirstChar(user.lastName)
            },
            the_stories: allStories,
            authors: authors_array
        });



    } else {
        res.json({
            message: "Error, the user is not authorized.",
            status: 401,
            stack: "Not Authorized"
        });
    }
}));






module.exports = router;

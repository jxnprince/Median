const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('../../utils.js');
const { User, Story, Comment } = require('../../db/models');
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

        res.json({
            message: "Success, is an authorized user.",
            status: 200,
            stack: "Authorized",
            current_user: {
                id: user.id,
                firstName: capitalizeFirstChar(user.firstName),
                lastName: capitalizeFirstChar(user.lastName)
            },

            // issue -- the promises will not resolve -- need them to resolve in order to get the author info
            author: (allStories.map(async (eachAuthor) => {
                const result = await User.findByPk(eachAuthor.userId, { attributes: ["firstName", "lastName", "avatar"] });
                return [result.dataValues];
            })),

            the_stories: allStories,

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

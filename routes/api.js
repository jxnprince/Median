const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils.js');
const { User, Story, Like, Comment } = require('../db/models');




router.get("/feed", asyncHandler(async (req, res) => {
    const session = req.session.auth;

    if(session) {
        const allStories = await Story.findAll({ where: {
        // order by most recent story -- createdAt
        // need to figure out how to get the number of likes associated with an story
        },

        include: Comment
    });


        res.json({
            message: "Success, is an authorized user.",
            status: 200,
            stack: "Authorized",
            the_stories: allStories
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

const express = require('express');
const router = express.Router();
const { User, Story } = require('../../db/models');
const { asyncHandler } = require('../../utils.js');




//GET localhost:8080/api/users/:id/stories
router.get('/:id(\\d+)/stories', asyncHandler( async(req, res) => {
    //return 5 Stories
    //includes: link to story, quantity of likes, comments
    //organized by current date
    const userId = req.params.id;
    const usersStories = await Story.findAll({
        where: { userId }
    });

    if(usersStories) {
        res.json({
            their_stories: usersStories
        });
    } else {
        res.json({
            message: "Error, there are no stories associated with this user account."
        });
    }

}));







//GET localhost:8080/api/users/:id/bookmarks
router.get('/:id(\\d+)/bookmarks', asyncHandler( async(req, res) => {
    const userId = req.params.id;
    const usersBookmarks = await User.findByPk(userId, {
        attributes: ["firstName", "lastName", "avatar"],
        include: [
            {
                model: Story,
                attributes: ["postBody", "title"]
            }
        ]
    });

    if (usersBookmarks) {
        res.json({
            their_bookmarks: usersBookmarks
        });
    } else {
        res.json({
            message: "Error no stories are associated with your account."
        });
    }

}));





//GET localhost:8080/api/users/:id/
router.get('/:id(\\d+)', asyncHandler( async (req, res) => {
    const session = req.session.auth;

    if(session) {
        const the_user = await User.findByPk(req.params.id, {
            attributes: ["firstName", "lastName", "avatar"]
        });

        res.json({
            user: the_user
        });

    }  else {
        res.json({
            message: "You are not authorized.",
            status: 401,
            stack: "Not authorized."
        });
    }

}));



module.exports = router;

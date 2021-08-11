const express = require('express');
const router = express.Router();
const { User, Story } = require('../../db/models');
const { asyncHandler } = require('../../utils.js');
const sequelize = require('sequelize');
const Op = sequelize.Op;


// used to give the current session / logged in users id
//GET localhost:8080/api/users/
router.get('/', (req, res) => {
    const session = req.session.auth;
    if(session) {
        res.json({
            userId: session.userId,
            status: 200
        });
    } else {
        res.json({
            message: "Error, you are not authorized.",
            status: 401,
            stack: "Not authorized."
        });
    }

});

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
                attributes: ["title", "imgUrl"]
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
    const userId = req.params.id

    if(session) {
        const the_user = await User.findByPk(userId,
            { attributes: [
                "firstName",
                "lastName",
                "avatar",
                "email",
                "gender",
                "id"
            ] }
        );


        let followees = await User.findByPk(userId, {
            include: [
                {
                    model: User,
                    as: "Followees",
                    attributes: ["firstName", "lastName", "id"]
                }
            ]
        });

        const allfollowees = followees.Followees.map((followed) => followed.Follow.followerId);
        const followeeStories = await Story.findAll({
            where: { userId: { [Op.in]: allfollowees } },
        });

        const followeesUserInfo = await User.findAll({
            where: { id: { [Op.in]: allfollowees } },
            attributes: ["firstName", "lastName", "avatar", "id"]
        });

        res.json({
            user: the_user,
            followeeStories,
            followeesUserInfo
        });

    } else {
        res.json({
            message: "You are not authorized.",
            status: 401,
            stack: "Not authorized."
        });
    }

}));

module.exports = router;

const { express, asyncHandler, setTokenCookie, User, Story, restoreUser, validateLogin, validateSignup } = require('../lib');



const sequelize = require('sequelize');
const Op = sequelize.Op;

const router = express.Router();


//POST  localhost:5000/api/users/login
router.post('/login', validateLogin, asyncHandler(async (request, response, next) => {
    const { credential, password } = request.body;

    const user = await User.login({ credential, password });

    if (user === false) {
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid.'];
        response.json({ err });
        return next(err);
    }

    setTokenCookie(response, user);

    response.json({ user });
}));



//DELETE localhost:5000/api/users/logout
router.delete('/logout', (request, response) => {
    // need to grab the token cookie and only if they have a token can they logout
    response.clearCookie('token');
    response.json({ user: null });

});



//POST localhost:5000/api/users/signup
router.post('/signup', validateSignup, asyncHandler(async (request, response, next) => {
    const { email, password, username } = request.body;

    const user = await User.signup({ email, username, password });


    if (user === false) {
        const err = new Error('Signup failed.');
        err.status = 401;
        err.title = 'Signup failed';
        err.errors = ['Signup failed'];
        return next(err);
    }

    setTokenCookie(response, user);

    response.json({ user });
}));



//GET localhost:5000/api/users/
// do not change implementation -- is specific to the react components

router.get('/', restoreUser, (request, response) => {
    const { user } = request;

    if (user) {
        response.json({ user: user.toSafeObject() });
    }


    response.json({ user: null });
});






//GET localhost:5000/api/users/:id/stories
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



//GET localhost:5000/api/users/:id/bookmarks
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





//GET localhost:5000/api/users/:id/
router.get('/:id(\\d+)', asyncHandler( async (req, res) => {
    const userId = req.params.id;

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


}));

module.exports = router;

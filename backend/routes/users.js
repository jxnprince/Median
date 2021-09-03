const { express, asyncHandler, setTokenCookie, User, Story, Bookmark, Follow, restoreUser, validateLogin, validateSignup } = require('../lib');




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
    const { email, firstName, lastName, password, confPassword } = request.body;

    const user = await User.signup({ email, firstName, lastName, password, confPassword });


    if (!user) {
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



//GET localhost:5000/api/users/specific/:userId
router.get('/specific/:userId(\\d+)', asyncHandler( async(request, response) => {
    const userId = request.params.userId;
    const user = await User.findByPk(userId);
    response.json({ user });

}));




//GET localhost:5000/api/users/:id/stories
router.get('/:id(\\d+)/stories', asyncHandler( async(request, response) => {
    //return 5 Stories
    //includes: link to story, quantity of likes, comments
    //organized by current date
    const userId = request.params.id;
    const usersStories = await Story.findAll({
        where: { userId }
    });

    if(usersStories) {
        response.json({
            their_stories: usersStories
        });
    } else {
        response.json({
            message: "Error, there are no stories associated with this user account."
        });
    }

}));



//GET localhost:5000/api/users/:id/bookmarks
router.get('/:id(\\d+)/bookmarks', asyncHandler( async(request, response) => {
    const userId = request.params.id;
    const usersBookmarks = await User.findByPk(userId, {
        attributes: ["id"],
        include: [
            {
                model: Story,
                attributes: ["title", "imgUrl", "id"]
            }
        ]
    });

    const result = {};
    usersBookmarks.Stories.forEach(eachBookmark => {
        result[eachBookmark.id] = {
            id: eachBookmark.id,
            imgUrl: eachBookmark.imgUrl,
            title: eachBookmark.title
        };
    });


    response.json({
        bookmarks: result
    });


}));





//GET localhost:5000/api/users/:id
router.get('/:id(\\d+)', asyncHandler( async (request, response) => {
    const userId = request.params.id;
    const allFollowers = await Follow.findAll({
        where: { userId },
        attributes: ['followerId']
    });

    const followers = []
    allFollowers.forEach(eachFollower => {
        followers.push(eachFollower.followerId)
    })



    const followeeStories = await Story.findAll({
        where: { userId: { [Op.in]: followers } },
        include: [
            {
                model: User,
                attributes: ["firstName", "lastName", "avatar", "id"]
            }
        ]
    });


    const result = {};
    followeeStories.forEach( eachStory => {
        result[eachStory.id] = eachStory;
    })

    response.json({ stories: result, length: followers.length });


}));

module.exports = router;

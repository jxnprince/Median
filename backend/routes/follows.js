const { express, asyncHandler, Follow } = require('../lib');
const router = express.Router();





// GET localhost:5000/api/follows/:userId
router.get('/:userId(\\d+)', asyncHandler(async (request, response) => {
    const userId = request.params.userId;

    const following = await Follow.findAll({
        where: { followerId: userId },
        attributes: [ "userId" ]
    });
    // normalize by userId
    const result = {};
    following.forEach(eachPerson => {
        result[eachPerson.userId] = eachPerson;
    });

    response.json({ followers: result });
}));


//POST  localhost:5000/api/follows/:userId/:followerId
// userId is the user the current logged-in user is following
// followerId is the current logged in users id
router.post('/:userId(\\d+)/:followerId(\\d+)', asyncHandler(async (request, response) => {
    const userId = request.params.userId;
    const followerId = request.params.followerId;

    const newFollow = await Follow.create({ userId, followerId });
    response.json({ follow: newFollow});

}));





//DELETE localhost:5000/api/follows/:userId
router.delete('/:userId(\\d+)', asyncHandler(async (request, response) => {
    const userId = request.params.userId;
    const follow = await Follow.findOne({
        where: { userId },
    });

    follow.destroy();

    response.end();

}));





module.exports = router;

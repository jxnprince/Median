const { express, asyncHandler, Like } = require('../lib');
const router = express.Router();






//POST localhost:5000/api/likes/:storyId/:userId
router.post('/:storyId(\\d+)/:userId(\\d+)', asyncHandler(async(request, response) => {
    const storyId = request.params.storyId;
    const userId = request.params.userId;
    // create a new like
    const newLike = await Like.create({ storyId, userId });
    response.json({ "like": newLike });

}));






module.exports = router;

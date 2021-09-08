





const { express, asyncHandler, Bookmark } = require('../lib');
const router = express.Router();





// POST localhost:5000/api/bookmarks/:userId/:storyId
router.post('/:userId(\\d+)/:storyId(\\d+)', asyncHandler (async (request, response) => {
  const userId = response.params.userId;
  const storyId = response.params.storyId;

  const bookmark = await Bookmark.create({ userId, storyId });
  response.json({ bookmark });

}));





module.exports = router;

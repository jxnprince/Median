const { express, asyncHandler, Follow } = require('../lib');
const router = express.Router();





//POST  localhost:5000/api/follows/:userId/:followerId
// userId is the user the current logged in user is following
// followerId is the current logged in users id
router.post('/', asyncHandler(async (request, response) => {
    const userId = request.params.userId;
    const followerId = request.params.followerId;

    const newFollow = await Follow.create({ userId, followerId });
    response.json({ follow: newFollow});

}));





//DELETE localhost:5000/api/follows/:id
// router.delete('/:id', asyncHandler(async (req, res) => {
    // const followId = req.params.id
    // const userId = req.session.auth.userId

    //logic for deleting a follow

    // const followQuery = await Follow.findByPk(followId)
    // const followQuery = await Follow.findAll({
    //     attributes: ['id']
    // })
    // res.json(followQuery)
    // followQuery.destroy()
// }))





module.exports = router;

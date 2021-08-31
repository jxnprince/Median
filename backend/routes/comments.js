

const { express, asyncHandler, Comment, User } = require('../lib');
const router = express.Router();




//GET localhost:5000/api/comments/:storyId
router.get('/:id(\\d+)', asyncHandler(async (request, response) => {
    const storyId = request.params.id;
    const comments = await Comment.findAll({
        where: {
            storyId
        },
        include: [
            {
                model: User,
                attributes: ["firstName", "lastName", "avatar"]
            }
        ]
    });

    response.json({ comments });
}));




// POST localhost:5000/api/comments/:userId/:storyId
router.post('/:userId(\\d+)/:storyId(\\d+)', asyncHandler(async (request, response) => {
    const userId = request.params.userId;
    const storyId = request.params.storyId;
    const body = request.body.body;

    const comment = await Comment.create({ body, userId, storyId });

    const user = await User.findByPk(userId, { attributes: ["firstName", "lastName", "avatar"] });

    const result = { comment, User: user };

    response.json(result);

}));




// //PUT localhost:8080/api/comments/:id
// router.put('/:id(\\d+)', createCommentValidator, csrfProtection, asyncHandler(async (req, res) => {
//     const commentId = req.params.id;
//     const userId = req.session.auth.userId
//     const { comment } = req.body


//     const validationErrors = validationResult(req);
//     if (validationErrors.isEmpty()) {
//     const commentQuery = await Comment.findByPk(commentId)

//     if (commentQuery.userId === userId) {
//         commentQuery.body = comment
//         commentQuery.save()
//     }

//     res.json({ commentQuery });

//     } else {

//         const errors = validationErrors.array().map((error) => error.msg);
//         res.render('singlestory', { errors, csrfToken: req.csrfToken() });
//     }
// }));




// //DELETE localhost:8080/api/comments/:commentId
// router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
//     const commentId = req.params.id;
//     const userId = req.session.auth.userId;
//     const commentQuery = await Comment.findByPk(commentId, {
//         where: { userId }
//     });

//     if (commentQuery) {
//         commentQuery.destroy()
//         res.json({ "status": 200 });
//     } else {
//         res.json({ "status": 500, "message": "Error, could not delete comment." });
//     }

// }));



module.exports = router;

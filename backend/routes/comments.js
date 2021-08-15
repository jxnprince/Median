

const { express, asyncHandler, Comment } = require('../lib');
const router = express.Router();




//GET localhost:5000/api/comments/:storyId
router.get('/:id(\\d+)', asyncHandler(async (request, response) => {
    const storyId = request.params.id;
    const comments = await Comment.findAll({
        where: {
            storyId
        }
    });

    response.json({ comments });
}));



// //POST localhost:8080/api/comments/:id
// router.post('/:id(\\d+)', createCommentValidator, csrfProtection, asyncHandler(async (req, res) => {
//     const storyId = req.params.id;
//     const userId = req.session.auth.userId;
//     const comment = req.body.body;

//     const validationErrors = validationResult(req)


//     if (validationErrors.isEmpty()) {
//         const newComment = await Comment.create({ body: comment, userId, storyId });
//         if (newComment) {
//             res.redirect(`/stories/${storyId}`);

//         } else {
//             res.json({ messsage: "Comment not created" });
//         }
//     } else {

//         const errors = validationErrors.array().map((error) => error.msg);
//         res.render('singlestory', { errors, csrfToken: req.csrfToken() });
//     }
// }))


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

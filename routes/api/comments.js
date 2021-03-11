const express = require('express');
const router = express.Router();
const {
    asyncHandler
} = require('../../utils')
const {
    Comment
} = require('../../db/models')

//GET localhost:8080/api/comments/:id || working
//GET localhost:8080/api/comments?storyId=<id>&userId=<id>  || convention
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    //return a list of comments
    //api/comments?storyId=storyId=<storyId>
    const storyId = req.params.id;
    const allComments = await Comment.findAll({
        where: {
            storyId
        }
    })
    res.json(allComments)
}))

//POST localhost:8080/api/comments || working
router.post('/:id(\\d+)', asyncHandler(async (req, res) => {
    //logic for creating a comment
    const storyId = req.params.id
    const userId = req.session.auth.userId
    // const userId = 1 //Testing in postman
    const {
        //!make sure to rename later
        comment
    } = req.body
    const newComment = await Comment.create({
        body: comment,
        userId,
        storyId
    })
    if (newComment) {
        res.json({
            message: "You created a new comment",
            newComment
        })
    } else {
        res.json({
            messsage: "Comment not created"
        })
    }
}))

//PUT localhost:8080/api/comments/:id || working?
//patch?
router.put('/:id', asyncHandler(async (req, res) => {
    const commentId = req.params.id;
    const userId = req.session.auth.userId
    // const userId = 1 //Testing in postman

    //logic for editing comments
    const {
        comment
    } = req.body

    const commentQuery = await Comment.findByPk(commentId)
    //Only edit comment if userId matches userId on comment
    if (commentQuery.userId === userId) {
        commentQuery.body = comment
        commentQuery.save()
    }

    res.json({
        commentQuery
    })
}))

//DELETE localhost:8080/api/comments/:id || working?
//! Need to discuss urgently, ondelete: cascade
router.delete('/:id', asyncHandler(async (req, res) => {
    const commentId = req.params.id
    const userId = req.session.auth.userId
    // const userId = 1 //Testing in postman
    //logic for deleting a comment
    const commentQuery = await Comment.findByPk(commentId)
    commentQuery.destroy()

    res.send('Comment deleted')
}))

module.exports = router;

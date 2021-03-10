const express = require('express');
const router = express.Router();
const {
    asyncHandler
} = require('../../utils')
const {
    Comment,
    User
} = require('../../db/models')

//GET localhost:8080/api/comments || working
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
    const storyId = req.params.id;
    const userId = req.session.auth.userId
    const {
        //!make sure to rename later
        body
    } = req.body
    const newComment = await Comment.create({
        body,
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
router.put('/:id', (req, res) => {
    //logic for editing comments
    res.json({
        test: "this is a test put request to api/comments"
    })
})

//DELETE localhost:8080/api/comments/:id || working?
router.delete('/:id', (req, res) => {
    //logic for deleting a comment
    res.json({
        test: "this is a test delete request to api/comments"
    })
})

module.exports = router;

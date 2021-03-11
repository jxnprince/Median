const express = require('express');
const router = express.Router();
const {
    asyncHandler
} = require('../../utils')
const {
    Follow
} = require('../../db/models')


//? POST localhost:8080/api/follows?userId=personWereFollowingId
//? POST localhost:8080/api/follows/:personWereFollowingId || works
router.post('/', asyncHandler(async (req, res) => {
    const {
        followingId
    } = req.query
    if (followingId !== undefined) {
        const userId = req.session.auth.userId
        // const userId = 1 //testing in postman

        //add targeted user to current users followList
        const newFollow = await Follow.create({
            userId: followingId,
            followerId: userId
        })

        res.json({
            newFollow
        })
    } else {
        res.send('FollowingId is required.')
    }
}))

//DELETE localhost:8080/api/follows/:id
router.delete('/:id', asyncHandler(async (req, res) => {
    const followId = req.params.id
    // const userId = req.session.auth.userId

    //logic for deleting a follow

    const followQuery = await Follow.findByPk(followId)
    // const followQuery = await Follow.findAll({
    //     attributes: ['id']
    // })
    res.json(followQuery)
    // followQuery.destroy()
}))


module.exports = router;

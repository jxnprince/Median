const express = require('express');
const router = express.Router();
const {
    asyncHandler
} = require('../../utils')
const {
    Likes
} = require('../../db/models')


/*
    1. What data do you need to pass in request? (Logged in user? StoryId?, etc)
    2. Pass in that data and test in postman to make sure youre receiving it, replace test response with data
    3. Query database and use data to create a new row in table
    4. Return new data/confirmation/failure message
    5. Add error handling where needed
*/

//POST localhost:8080/api/likes || works
router.post('/', asyncHandler(async(req, res) => {
    const {
        likingId
    } = req.query
    if (likingId !== undefined) {
        // const userId = req.session.auth.userId
        const userId = 1 //testing in postman

        //add targeted user to current users followList
        const newLike = await Likes.create({
            userId: followingId,
            likingId: userId
        })

        res.json({
            newLike
        })
    } else {
        res.send('likingId is required.')
    }
    //create a new like
    res.json({
        test: "this is a test post route to api/likes"
    })
}))

//DELETE localhost:8080/api/likes/:id ||working?
router.delete('/:id', (req, res) => {
    //delete a like
    res.json({
        test: "this is a test delete to api/likes/:id"
    })
})
module.exports = router;

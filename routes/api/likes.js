const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../../utils');
const { Likes } = require('../../db/models');




//POST localhost:8080/api/likes/:storyId/:userId
router.post('/:storyId(\\d+)/:userId(\\d+)', asyncHandler(async(req, res) => {
// sudo code below
// need to query the likes by userId
// if there id comes back search by the storyId
// if there is a like that matches the above then remove the like and redirect to /feed
// else create a new like and then redirect to /feed




    res.json({
        test: "this is a test post route to api/likes"
    })

}));






//DELETE localhost:8080/api/likes/:id
router.delete('/:id(\\d+)', (req, res) => {
    res.json({
        test: "this is a test delete to api/likes/:id"
    })
});





module.exports = router;

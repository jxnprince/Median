const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../../utils');
const { Likes } = require('../../db/models');




//POST localhost:8080/api/likes/:storyId/:userId
router.post('/', asyncHandler(async(req, res) => {

    res.json({
        test: "this is a test post route to api/likes"
    })

}));






//DELETE localhost:8080/api/likes/:id
router.delete('/:id', (req, res) => {
    res.json({
        test: "this is a test delete to api/likes/:id"
    })
});





module.exports = router;

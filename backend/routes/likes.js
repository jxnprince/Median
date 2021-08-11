const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../../utils');
const { Like } = require('../../db/models');




//POST localhost:8080/api/likes/:storyId/:userId
router.post('/:storyId(\\d+)/:userId(\\d+)', asyncHandler(async(req, res) => {
    const userId = req.params.userId;
    const storyId = req.params.storyId;

    const theLike = await Like.findOne({
        where: { userId, storyId }
    });


    if(theLike === null) {
        // create a new like
        const newLike = await Like.create({ storyId, userId });
        res.json({ "status": 200 });
    } else {
        // remove the like
        await theLike.destroy();
        res.json({ "status": 200 });
    }

}));






//DELETE localhost:8080/api/likes/:id
router.delete('/:id(\\d+)', (req, res) => {
    res.json({
        test: "this is a test delete to api/likes/:id"
    })
});





module.exports = router;

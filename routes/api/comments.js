const express = require('express');
const router = express.Router();

//GET localhost:8080/api/commnets || working
router.get('/', (req, res) => {
    //return a list of comments
    //api/comments?storyId=storyId=<storyId>
    res.json({
        test: "this is a test get request to api/commnets"
    })
})

//POST localhost:8080/api/comments || working
router.post('/', (req, res) => {
    //logic for creating a comment
    res.json({
        test: "this is a test post request to api/commnets"
    })
})

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

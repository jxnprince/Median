const express = require('express');
const router = express.Router();

//POST localhost:8080/api/likes || works
router.post('/', (req, res) => {

    /*
        1. What data do you need to pass in request? (Logged in user? StoryId?, etc)
        2. Pass in that data and test in postman to make sure youre receiving it, replace test response with data
        3. Query database and use data to create a new row in table
        4. Return new data/confirmation/failure message
        5. Add error handling where needed
    */

    //create a new like
    res.json({
        test: "this is a test post route to api/likes"
    })
})

//DELETE localhost:8080/api/likes/:id ||working?
router.delete('/:id', (req, res) => {
    //delete a like
    res.json({
        test: "this is a test delete to api/likes/:id"
    })
})
module.exports = router;

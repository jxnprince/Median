const express = require('express');
const router = express.Router();

//GET localhost:8080/api/stories/ || works
router.get('/', (req, res) => {
    //return a list of the most recent stories
    res.json({
        test: 'this is a test on get to api/stories'
    })
})
//POST localhost:8080/api/stories/ || works
router.post('/', (req, res) => {
    //submits a story via a form
    //submitted stories will then populate the general feed?
    res.json({
        test: "this is a post request to api/stories"
    })
})
//GET localhost:8080/api/stories/:id || works
router.get('/:id', (req, res) => {
    //test that you are pulling the id paramater
    //return a list of the most recent stories by a user.
    res.json({
        test: "this is a get request to api/stories/:id"
    })
})

//DELETE localhost:8080/api/stories/:id || works
router.delete('/:id', (req, res) => {
    //test to make sure thet id paramater is being deleted
    //deletes a specific user story
    //user must own the story to delete.
    res.json({
        test: "this is a delete request to api/stories/:id"
    })
})
//PUT localhost:8080/api/stories/:id || works
router.put('/:id', (req, res) => {
    //updates a specific user story
    res.json({
        test: "this is a put request to api/stories/:id"
    })
})



module.exports = router;

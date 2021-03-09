const express = require('express');
const router = express.Router();

//GET localhost:8080/api/stories/
router.get('/', (req, res) => {
    res.json({
        test: 'this is a test on get to api/stories'
    })
})
//POST localhost:8080/api/stories/
router.post('/', (req, res) => {
    res.json({
        test: "this is a post request to api/stories"
    })
})
//GET localhost:8080/api/stories/:id
router.get('/:id', (req, res) => {
    //test that you are pulling the id paramater
    res.json({
        test: "this is a get request to api/stories/:id"
    })
})

//DELETE localhost:8080/api/stories/:id
router.delete('/:id', (req, res) => {
    //test to make sure thet id paramater is being deleted
    res.json({
        test: "this is a delete request to api/stories/:id"
    })
})

router.put('/:id', (req, res) => {
    res.json({
        test: "this is a put request to api/stories/:id"
    })
})



module.exports = router;

const express = require('express');
const router = express.Router();

//GET localhost:8080/api/commnets
router.get('/', (req, res) => {
    res.json({
        test: "this is a test get request to api/commnets"
    })
})

//POST localhost:8080/api/commnets
router.post('/', (req, res) => {
    res.json({
        test: "this is a test post request to api/commnets"
    })
})

//PUT localhost:8080/api/comments/:id
router.put('/:id', (req, res) => {
    res.json({
        test: "this is a test put request to api/comments"
    })
})

//DELETE localhost:8080/api/comments/:id
router.delete('/:id', (req, res) => {
    res.json({
        test: "this is a test delete request to api/comments"
    })
})
module.exports = router;

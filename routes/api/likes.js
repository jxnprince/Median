const express = require('express');
const router = express.Router();

//POST localhost:8080/api/likes || works
router.post('/', (req, res) => {
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

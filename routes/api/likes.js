const express = require('express');
const router = express.Router();

//POST localhost:8080/api/likes
router.post('/', (req, res) => {
    res.json({
        test: "this is a test post route to api/likes"
    })
})

//DELETE localhost:8080/api/likes/:id
router.delete('/:id', (req, res) => {
    res.json({
        test: "this is a test delete to api/likes/:id"
    })
})
module.exports = router;

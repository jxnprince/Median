const express = require('express');
const router = express.Router();

//POST localhost:8080/api/follows
router.post('/', (req, res) => {
    res.json({
        test: "this is a test post request to api/follows"
    })
})


module.exports = router;

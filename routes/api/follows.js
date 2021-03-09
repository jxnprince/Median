const express = require('express');
const router = express.Router();

//POST localhost:8080/api/follows || works
router.post('/', (req, res) => {
    //add targeted user to current users followList
    res.json({
        test: "this is a test post request to api/follows"
    })
})


module.exports = router;

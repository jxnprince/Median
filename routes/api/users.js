const express = require('express');
const router = express.Router();

//localhost:8080/api/users/:id/stories
router.get('/', (req, res) => {
    res.json({
        test: "this is a get test to api/users/:id/stories"
    })
})

module.exports = router;

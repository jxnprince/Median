const express = require('express');
const router = express.Router();

//GET localhost:8080/api/users/:id/stories || not working ? no id to reference?
router.get('/', (req, res) => {
    //return 5 Stories
    //includes: link to story, quantity of likes, comments
    //organized by current date
    res.json({
        test: "this is a get test to api/users/:id/stories"
    })
})

module.exports = router;

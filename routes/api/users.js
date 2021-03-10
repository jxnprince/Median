const express = require('express');
const router = express.Router();
const { User } = require('../../db/models');
const { asyncHandler } = require('../../utils.js');

//GET localhost:8080/api/users/:id/stories || not working ? no id to reference?
router.get('/', (req, res) => {
    //return 5 Stories
    //includes: link to story, quantity of likes, comments
    //organized by current date
    res.json({
        test: "this is a get test to api/users/:id/stories"
    })
});



//GET localhost:8080/api/users/:id/
//used for the feed page to get user info for each author on the page
router.get('/:id(\\d+)', asyncHandler( async (req, res) => {
    const session = req.session.auth;

    if(session) {
        const the_user = await User.findByPk(req.params.id, {
            attributes: ["firstName", "lastName", "avatar"]
        });

        res.json({
            user: the_user
        });

    }  else {
        res.json({
            message: "You are not authorized.",
            status: 401,
            stack: "Not authorized."
        });
    }

}));



module.exports = router;

const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils.js');





router.get('/feed', (req, res) => {
    if(req.session.auth){
        res.render('feed');
    } else {
        res.render('error', { message: "You do not have access to this resource.", error: {
                    status: 401,
                    stack: "Not authorized."
                }
            }
        );
    }

});





module.exports = router;

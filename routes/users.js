const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils.js');
const { loginUser } = require('../auth.js');
const { User } = require('../db/models');




router.post("/demo-user", csrfProtection, asyncHandler(async(req, res) => {
  const email = 'test@test.net';
  const user = await User.findOne({ where: { email }});

  loginUser(req, res, user);

  return res.session.save(() => {
    if(err) {
      next(err);
    } else {
      res.redirect("/");
    }
  });
}));



module.exports = router;

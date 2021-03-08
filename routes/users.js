const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils.js');
const { loginUser } = require('../auth.js');
const { User } = require('../db/models');



router.get("/", csrfProtection, asyncHandler(async (req, res) => {
  if (req.session.auth){
    res.redirect("/feed");
  } else {
    res.render("splash", { token: req.csrfToken()});
  }
}));


router.post("/demo-user", csrfProtection, asyncHandler(async(req, res,next) => {
  const email = 'test@test.net';
  const user = await User.findOne({ where: { email }});

  loginUser(req, res, user);

  return req.session.save(() => {
    if (res) {
      res.redirect("/")
    } else {
      next(res.error)
    }
  });
}));



module.exports = router;

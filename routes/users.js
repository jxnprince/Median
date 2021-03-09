const express = require('express');
const router = express.Router();
const {
  csrfProtection,
  asyncHandler
} = require('../utils.js');
const {
  loginUser
} = require('../auth.js');
const {
  User
} = require('../db/models');
const {
  check,
  validationResult
} = require('express-validator');


//!clean these up if its okay with everyone
router.get("/", csrfProtection, asyncHandler(async (req, res) => {
  if (req.session.auth) {
    res.redirect("/feed");
  } else {
    res.render("splash", {
      token: req.csrfToken()
    });
  }
}));

const createUserValidators = [
  check('email')
  .exists({
    checkFalsy: true
  })
  .withMessage('Please input a valid email')
  .isLength({
    max: 100
  })
  .withMessage('Please provide an email address under 100 characters'),
  check('firstName')
  .exists({
    checkFalsy: true
  })
  .withMessage('Please input a valid first name')
  .isLength({
    max: 45
  })
  .withMessage('Please provide a first name under 45 characters'),
  check('lastName')
  .exists({
    checkFalsy: true
  })
  .withMessage('Please input a valid last name')
  .isLength({
    max: 75
  })
  .withMessage('Please provide a last name under 75 characters'),

  check('hashedPassword')
  .exists({
    checkFalsy: true
  })
  .withMessage('Please input a valid password')
  .isLength({
    max: 255
  })
  .withMessage('Please provide a password under 255 characters')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
  .withMessage('Password must contain at least one lowercase letter, one uppercase letter, and one special character(!#%^%$...))'),
  check('confirmPassword')
  .exists({
    checkFalsy: true
  })
  .withMessage('Please confirm password')
  .custom((value, {
    req
  }) => {
    if (value !== req.body.password) {
      throw Error('Passwords do not match')
    }
    return true;
  }),
  check('gender')
  .isLength({
    max: 20
  })
  .withMessage('Please provide a gender under 20 characters'),
  check('avatar')
  .isLength({
    max: 255
  })
  .withMessage('Please provide an address under 255 characters'),
];

router.post('/user/create-account', csrfProtection, asyncHandler(async (req, res) => {
}))
router.post("/demo-user", csrfProtection, asyncHandler(async (req, res, next) => {
  const email = 'test@test.net';
  const user = await User.findOne({
    where: {
      email
    }
  });

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

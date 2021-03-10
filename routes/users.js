const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils.js');
const { loginUser, logoutUser } = require('../auth.js');
const { User } = require('../db/models');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')

// GET localhost:8080/users/ ||works

router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  if (req.session.auth) res.redirect("/feed");
  else res.render("splash", { csrfToken: req.csrfToken() });
}));

//put in utils
const createUserValidators = [
  check('email')
  .exists({ checkFalsy: true })
  .withMessage('Please input a valid email')
  .isLength({ max: 100 })
  .withMessage('Please provide an email address under 100 characters'),
  check('firstName')
  .exists({ checkFalsy: true })
  .withMessage('Please input a valid first name')
  .isLength({ max: 45 })
  .withMessage('Please provide a first name under 45 characters'),
  check('lastName')
  .exists({ checkFalsy: true })
  .withMessage('Please input a valid last name')
  .isLength({ max: 75 })
  .withMessage('Please provide a last name under 75 characters'),
  check('hashedPassword')
  .exists({ checkFalsy: true })
  .withMessage('Please input a valid password')
  .isLength({ max: 255 })
  .withMessage('Please provide a password under 255 characters')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
  .withMessage('Password must contain at least one lowercase letter, one uppercase letter, and one special character(!#%^%$...))'),
  check('confirmPassword')
  .exists({ checkFalsy: true })
  .withMessage('Please confirm password')
  .custom((value, { req }) => {
    if (value !== req.body.password) throw Error('Passwords do not match')
    return true;
  }),
  check('gender')
  .isLength({ max: 20 })
  .withMessage('Please provide a gender under 20 characters'),
  check('avatar')
  .isLength({ max: 255 })
  .withMessage('Please provide an address under 255 characters')
];

//DO NOT TOUCH THIS ROUTE!!!!
router.post('/signup', createUserValidators, asyncHandler(async (req, res) => {
  const { email, firstName, lastName, password, gender, avatar } = req.body
  const validationErrors = validationResult(res)
  
  if (validationErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({email, firstName, lastName, hashedPassword, gender, avatar})
    loginUser(req, res, user)
    req.session.save(() => {
      if (req.session) res.redirect("/feed")
      else next(res.err)
    })
    console.log(`You hit the user registration route`)
  } else {
    console.log(`You hit the user registration error route`)
    const errors = validationErrors.array().map((error) => error.msg);
    res.render('error', { user, errors, csrfToken: req.csrfToken() })
  }
}))

const loginValidators = [
   check('email')
  .exists({ checkFalsy: true })
  .withMessage('A field is missing or invalid'),
  check('password')
  .exists({ checkFalsy: true })
  .withMessage('A field is missing or invalid')
]

// POST localhost:8080/users/login || working
router.post('/login', loginValidators, asyncHandler(async(req, res) => {
  let user = { email, password } = req.body
  const validationErrors = validationResult(res)

  if (validationErrors.isEmpty()) {
    const dbEmail = await User.findOne({ where: { email: email } })
    
    if(dbEmail){
      const match = await bcrypt.compare(password, dbEmail.hashedPassword.toString())
      
      if (match) {
        user = dbEmail
        loginUser(req, res, user)
        req.session.save(() => {
          if (req.session) res.redirect("/feed")
          else next(res.err)
        })
      }
    }
  } else {
    const errors = validationErrors.array().map((error) => error.msg);
    res.render('error', { user, errors, csrfToken: req.csrfToken() })
  }
}))

// POST localhost:8080/users/logout || working
router.post('/logout', (req, res) => {
  logoutUser(req, res)
  res.redirect('/')
})

router.post('/demo-user', asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ where: { email: 'test@test.net' } });
  loginUser(req, res, user);
  return req.session.save(() => {
    //Not logging user in.  Redirecting to wrong place???
    if (req.session) res.redirect("/feed")
    else next(res.error)
  })
}));

// // GET localhost:8080/users/profile/:id || not working because no id to reference?
router.get('/profile/:id', (req, res) => {
  console.log(`<==========================================`)
  res.json({ test: "this is a test get to profile/:id" })
})

// // PUT localhost:8080/users/profile/:id || not working because no id to reference?
// router.put('/profile/:id', (req, res) => {
//   res.json({ test: "this is a test put request " })
// })

// // DELETE localhost:8080/users/profile/:id || not working because no id to reference?
// router.delete('/profile/:id', (req, res) => {
//   res.json({ test: "this is a test request" })
// })

module.exports = router;
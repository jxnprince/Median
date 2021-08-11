const csurf = require('csurf');
const csrfProtection = csurf({ cookie: true });
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const capitalizeFirstChar = (the_string) => the_string.charAt(0).toUpperCase() + the_string.slice(1);
const  {check}  = require('express-validator');
const createStoryValidator = [
  check('title')
  .exists({ checkFalsy: true })
  .withMessage('Please input a valid title')
  .isLength({ max: 100 })
  .withMessage('Please provide a title under 100 characters'),
  check('postBody')
  .exists({ checkFalsy: true })
  .withMessage('Please input post content')
]

const updateStoryValidator = [
  check('the_title')
  .exists({ checkFalsy: true })
  .withMessage('Please input a valid title')
  .isLength({ max: 100 })
  .withMessage('Please provide a title under 100 characters'),
  check('the_story_post')
  .exists({ checkFalsy: true })
  .withMessage('Please input post content')
];



const createCommentValidator = [
  check('body')
  .exists({ checkFalsy: true })
  .withMessage('Please input a valid comment')
  .isLength({ max: 255 })
  .withMessage('Please provide a comment under 255 characters')
]

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
  check('password')
  .exists({ checkFalsy: true })
  .withMessage('Please input a valid password')
  .isLength({ max: 255 })
  .withMessage('Please provide a password under 255 characters')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
  .withMessage('Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character(!#%^%$...))'),
  check('confPassword')
  .exists({ checkFalsy: true })
  .withMessage('Please confirm password')
  .custom((value, { req }) => {
    if (value !== req.body.password) throw Error('Passwords do not match')
    return true;
  })
];

const loginValidators = [
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('A field is missing or invalid'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('A field is missing or invalid')
];

const updateUserValidators = [
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
  check('gender')
  .isLength({ max: 20 })
  .withMessage('Please provide a gender under 20 characters'),
  check('avatar')
  .isLength({ max: 255 })
  .withMessage('Please provide an address under 255 characters')
];



module.exports = {
    csrfProtection,
    asyncHandler,
    capitalizeFirstChar,
    createUserValidators,
    loginValidators,
    updateUserValidators,
    createStoryValidator,
    createCommentValidator,
    updateStoryValidator
};

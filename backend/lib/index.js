// imports here:
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');
const { check, validationResult } = require('express-validator');
const { environment } = require("../config");
const asyncHandler = require('express-async-handler');
// making all imports easy below
const { setTokenCookie, restoreUser, requireAuth } = require('../auth.js');
// all of the db models below
const { User, Notebook, Note, Tag } = require('../db/models');


// variable that determines if the app is in production or not
const isProduction = environment === 'production';


const initApp = (the_app) => {
  the_app.use(logger('dev'));
  the_app.use(cookieParser());
  the_app.use(express.json());


  // Security Middleware
  if (!isProduction) {
    // enable cors only in development
    the_app.use(cors());
  }
  // helmet helps set a variety of headers to better secure your app
  the_app.use(helmet({ contentSecurityPolicy: false }));

  // Set the _csrf token and create req.csrfToken method
  the_app.use(csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true,
    }
  }));

};





const setErrorHandlers = (the_app) => {
  // Catch unhandled requests and forward to error handler.
  the_app.use((request, response, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.title = "Resource Not Found";
    err.errors = ["The requested resource couldn't be found."];
    err.status = 404;
    next(err);

  });




  // Process sequelize errors
  the_app.use((err, request, response, next) => {
    // check if error is a Sequelize error:
    if (err instanceof ValidationError) {
      err.errors = err.errors.map((e) => e.message);
      err.title = 'Validation error';
    }
    next(err);
  });



  // Error formatter
  the_app.use((err, request, response, next) => {
    response.status(err.status || 500);
    console.error(err);

    response.json(
      {
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
      }
    );

  });

};





// server side validations here
const handleValidationErrors = (request, response, next) => {
  const validationErrors = validationResult(request);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors.array().map((error) => `${error.msg}`);
    const err = Error('Bad request.');
    err.errors = errors;
    err.status = 400;
    err.title = 'Bad request.';
    next(err);
  }
  next();
};




// login validations here
const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a password.'),
  handleValidationErrors,
];







// signup validations here
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];





// exports here:
module.exports = {
  express,
  logger,
  cors,
  csurf,
  helmet,
  cookieParser,

  ValidationError,
  check,
  validationResult,

  environment,
  asyncHandler,
  validateLogin,
  validateSignup,

  setTokenCookie,
  restoreUser,
  requireAuth,

  User,
  Notebook,
  Note,
  Tag,

  isProduction,
  initApp,
  setErrorHandlers
};

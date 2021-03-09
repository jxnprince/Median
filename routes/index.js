const express = require('express');
const router = express.Router();

const apiRouter = require('./api')
const storyRouter = require('./stories')
const userRouter = require('./users');

router.use('/users', userRouter)
router.use('/api', apiRouter)
router.use('/stories', storyRouter)

module.exports = router

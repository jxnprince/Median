const express = require('express');
const router = express.Router();
const apiRouter = require('./api')
const storyRouter = require('./stories')
const userRouter = require('./users');
const feedRouter = require('./feed.js')

router.use('/api', apiRouter)
// router.use('/stories', storyRouter)
router.use('/users', userRouter)
router.use('/feed', feedRouter);

router.get('/', (req, res) => res.redirect('/users'))

module.exports = router

const express = require('express');
const router = express.Router();

const apiStoriesRouter = require('./stories');
const apiUsersRouter = require('./users');
const apiFollowsRouter = require('./follows');
const apiLikesRouter = require("./likes");
const apiCommentsRouter = require('./comments');
const apiFeedRouter = require('./feed.js');
const apiNewsRouter = require('./news');

router.use('/stories', apiStoriesRouter);
router.use('/users', apiUsersRouter);
router.use('/follows', apiFollowsRouter);
router.use('/likes', apiLikesRouter);
router.use('/comments', apiCommentsRouter);
router.use('/feed', apiFeedRouter);
router.use('/news', apiNewsRouter);





module.exports = router

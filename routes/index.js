const express = require('express');
const router = express.Router();

const userRouter = require('./users.js');
const feedRouter = require('./feed.js');
const apiRouter = require('./api.js');


router.use('/', userRouter);
router.use('/', feedRouter);
router.use('/api', apiRouter);



module.exports = router

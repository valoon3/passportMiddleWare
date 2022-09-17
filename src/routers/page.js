const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('../passport/middleware');
const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.followCount = 0;
    res.locals.followingCount = 0;
    res.locals.followIdList = [];
    next();
})

router.get('/profile', isLoggedIn, (req, res, next) => {
    res.send('get profile');
})

router.get('/join', isNotLoggedIn, (req, res, next) => {
    res.send('get join');
})

module.exports = router;
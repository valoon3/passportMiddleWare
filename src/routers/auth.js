const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {isNotLoggedIn, isLoggedIn} = require('../passport/middleware');
const passport = require('passport');

// router.use((req, res, next) => {
//     res.locals.user = req.user;
//     res.locals.password = req.user.password;
//     res.locals.nickname = req.user.nickname;
//     next();
// })

router.post('/login', passport.authenticate('local'), (req, res, next) => {
    console.log(req);
    res.send('post join');
})

module.exports = router;
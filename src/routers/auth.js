const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {isNotLoggedIn, isLoggedIn} = require('../passport/middleware');
const passport = require('passport');

router.post('/login', passport.authenticate('local'), (req, res, next) => {
    console.log(req);
    res.send('post join');
})

module.exports = router;
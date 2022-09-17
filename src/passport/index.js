const passport = require('passport');
const local = require('./localStrategy');

// req.session 에 passport 설정을 심는다.
module.exports = () => {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    //
    // passport.deserializeUser((id, done) => {
    //     let user = {id: 'valoon2', password: '1234'};
    //     done(null, user);
    // });

    local();
};

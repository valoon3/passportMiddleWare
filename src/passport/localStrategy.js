const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'id',
        passwordField: 'password',
    }, (id, password, done) => {
        console.log('local-Strategy : ', id, password);
        // id를 통해서 db 에서 검색한 결과 user라고 임의로 정의
        const user = {id: 'valoon2', password: '1234'};

        return done(null, user);
    }));
};
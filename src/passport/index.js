const passport = require('passport');
const local = require('./localStrategy');

// req.session 에 passport 설정을 심는다.
module.exports = () => {

    passport.serializeUser((user, done) => { // 로그인 시에만 실행되어서 req.user 에 user.id 를 심음
        done(null, user.id);
        // req.user 에서 저장
    });

    // passport.session middleware가 이 메서드를 호출한다.
    passport.deserializeUser((id, done) => { // 페이지 이동 시마다 실행됨
        // 저장되어있는 id를 가지고 db에서 조회한다.
        let user = {id: 'valoon2', password: '1234'};
        done(null, user);
    });

    local();
};

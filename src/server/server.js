const express = require('express');
const session = require('express-session');
const app = express();
const passport = require('passport');
const passportConfig = require('../passport/index');
const auth = require('../routers/auth');

passportConfig(); // 패스포트 설정

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'secret',
    resave: false, // 변환 내용이 없더라도 다시 저장할 것인가
    saveUninitialized: false, // 저장할 내용이 없더라도 세션을 생성할 것인인가
    cookies: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookies',
}))
app.use(passport.initialize()); // 미들웨어는 req 객체에 passport 설정을 심고
app.use(passport.session()); // req.session 객체에 passport 정보를 저장한다.
app.use(auth);

app.get('/', (req, res) => {
    console.log(req.session);
    res.send('hello');
})

app.listen(8080,() => {
    console.log('wait for 8080 port');
})
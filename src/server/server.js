const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'secret',
    resave: false, // 변환 내용이 없더라도 다시 저장할 것인가
    saveUninitialized: true, // 저장할 내용이 없더라도 세션을 생성할 것인인가
    cookies: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookies',
}))

app.listen(8080,() => {
    console.log('wait for 8080 port');
})
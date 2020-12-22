const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const connect = require('./schemas');
//라우터 연결
const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const commentRouter = require('./routes/comments');

const app = express();

app.set('port', process.env.PORT || 3002);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express : app,
    watch : true,
});
connect();

app.use(morgan('dev'));// 데이터 요청과 응답에 대한 정보를 콘솔로 보여줌
app.use(express.static(path.join(__dirname,'public'))); //views 지정폴더
app.use(express.json()); // req.body 객체로 만들어줌
app.use(express.urlencoded({extended:false})); // querystring 해석 내장모듈

//라우터 연결
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments',commentRouter);

app.use((req,res,next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});
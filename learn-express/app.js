const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const nunjucks = require('nunjucks'); //nunjucks (template view engine)

dotenv.config();
const indexRouter = require('./routes');
const userRouter = require('./routes/user');
//const abcRouter = require('./routes/abc'); //////////////////
const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine','html');

nunjucks.configure('views', {
    express : app,
    watch: true,
});

//morgan
app.use(morgan('dev'));
//static 정적파일 지정폴더
app.use('/',express.static(path.join(__dirname, 'public')));
//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
//cookie-parser
app.use(cookieParser(process.env.COOKIE_SECRET));
//express-session
app.use(session({
    resave: false, //세션에 수정사항이 생기지 않더라도 다시 저장할 것인가
    saveUninitialized: false, //세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정하는 것
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true, //클라이언트에서 쿠키를 확인하지 못하도록 함
        secure: false, //http가 아닌 환경에서 사용 가능
    },
    name: 'session-cookie',
}));

app.use('/', indexRouter);
app.use('/user', userRouter);
//app.use('/abc', abcRouter);///////////////////////////

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
 });

app.use((req, res, next) => {
    console.log('모든 요청에 다 실행됩니다.');
    next();
});

app.get('/', (req, res, next) => {

    console.log('GET / 요청에만 실행됩니다.');
    next();
    //res.send('Hello Express!!');
    //res.sendFile(path.join(__dirname, '/index.html'));
},(req,res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});


/** 
  * 
const multer = require('multer');
const fs = require('fs');

try{
    fs.readdirSync('uploads');
}catch(error){
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}
const upload = multer({
    storage : multer.diskStorage({
        destination(req, file, done){
            done(null, 'uploads/');
        },
        filename(req, file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: {fileSize : 5 * 1024 * 1024},
});

app.get('/upload', (req,res) => {
    res.sendFile(path.join(__dirname, 'multipart.html'));
});
app.post('/upload',
upload.fields([{name:'image1'}, {name: 'image2'}]),
(req,res) =>{
    console.log(req.files, req.body);
    res.send('ok');
},
);
 */
//포트 번호를 달리하여 한번에 여러 서버를 실행할 수도 있습니다.

const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>hi there</h1>');
    res.write('<p>have a nice friday~</p>');
    res.end();
})
    .listen(8080, ()=> {
        console.log('8080번 포트에서 서버 대기 중입니다.');
    });

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>thanks~!</h1>');
    res.write('<p>you got ma day</p>');
    res.end();
})
    .listen(8081, ()=> {
        console.log('8081번 포트에서 서버 대기 중입니다.');
    });
    


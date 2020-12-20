//절대로 실제 서비스에서 사용해서는 안됩니다.
//보안상 매우 취약합니다.
//개념 설명을 위한 코드입니다.

const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') => 
    cookie
        .split(';')
        .map(v=>v.split('='))
        .reduce((acc, [k,v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        },{});
        
const session = {};

http.createServer(async (req,res) => {

    const cookies = parseCookies(req.headers.cookie);
    if(req.url.startsWith('/login')){
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() +5);
        const uniqueInt = Date.now();
        session[uniqueInt] = {
            name,
            expires,
        };
        res.writeHead(302, {

            Location: '/',
            'Set-Cookie':`session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
    } else if (cookies.session && session[cookies.session].expires > new Date()) {
        res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
        res.end(`${session[cookies.session].name}님 안녕하세요`);
    } else {
        try{
            const data = await fs.readFile('./cookie2.html');
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        } catch(err) {
            res.writeHead(500, {'Content-Type':'text/plain; charset=utf-8'});
            res.end(err.message);
            console.error(err);
        }
    }
})
    .listen(8085,()=>{
        console.log('8085번 포트에서 서버 대기 중입니다!');
    })

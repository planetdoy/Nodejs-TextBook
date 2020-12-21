//스레드풀이 4개이기 때문에 처음 네 작업이 동시에 실행되고
// 종료되면 다음 네 개의 작업이 실행됩니다.

const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('1:', Date.now() -start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('2:', Date.now() -start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('3:', Date.now() -start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('4:', Date.now() -start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('5:', Date.now() -start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('6:', Date.now() -start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('7:', Date.now() -start);
});
crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('8:', Date.now() -start);
});
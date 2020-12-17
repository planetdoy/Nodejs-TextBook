const fs = require('fs');

console.log('Start!!!!!!!!!');
fs.readFile('./파일시스템접근하기/readme2.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log('1번',data.toString());
});
fs.readFile('./파일시스템접근하기/readme2.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log('2번',data.toString());
});
fs.readFile('./파일시스템접근하기/readme2.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log('3번',data.toString());
});
console.log('End!!!!!!!!!')
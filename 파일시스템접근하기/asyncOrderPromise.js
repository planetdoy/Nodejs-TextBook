//promise를 통한 비동기 순서 출력

const fs = require('fs').promises;

console.log('start@@');
fs.readFile('./파일시스템접근하기/readme2.txt')
    .then((data)=>{

        console.log('1번',data.toString());
        return fs.readFile('./파일시스템접근하기/readme2.txt');

    })
    .then((data)=>{

        console.log('2번', data.toString());
        return fs.readFile('./파일시스템접근하기/readme2.txt');

    })
    .then((data)=>{

        console.log('3번', data.toString());
        console.log('end@@');
        
    })
    .catch((err)=>{
        console.error(err);
    });
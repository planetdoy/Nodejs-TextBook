//비동기 순서 출력
//콜백지옥의 예시

const fs = require('fs');

console.log('start@@');

fs.readFile('./파일시스템접근하기/readme2.txt',(err,data)=>{

    if(err){
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./파일시스템접근하기/readme2.txt',(err,data)=>{

        if(err){
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./파일시스템접근하기/readme2.txt',(err,data)=>{

            if(err){
                throw err;
            }
            console.log('3번', data.toString());
            console.log('end@@');
        });
    });
});

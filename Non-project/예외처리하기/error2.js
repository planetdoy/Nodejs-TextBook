//노드 내장 모듈의 에러는 실행중인 프로세스를 멈추지 않습니다.
//에러를 throw하게 되면 노드 프로세스가 멈춰버립니다. 
//반드시 try, catch로 throw한 에러를 잡아줘야 합니다.
const fs = require('fs');

setInterval(() => {
    fs.unlink('./abcdefg.js',(err)=> {
        if(err){
            console.error(err);
        }
    });
},1000);
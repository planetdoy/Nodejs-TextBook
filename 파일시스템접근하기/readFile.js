const fs = require('fs');
//파일의 경로가 현재 파일 기준이 아닌 node명령어를 실행하는 콘솔 기준이라는 점을 유의합니다.
fs.readFile('./파일시스템접근하기/readme.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());// 버퍼는 사람이 읽을 수 있는 형식이 아니므로 toString을 사용하여 문자열로 변환하였습니다.
});

//readFile의 결과물은 버퍼(Buffer)라는 형식으로 제공됩니다.
//단순히 버퍼를 메모리의 데이터라고 생각합니다.
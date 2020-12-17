const exec = require('child_process').exec;

const process = exec('dir');

process.stdout.on('data',function(data){
    console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
    console.error(data.toString());
}); // 실행 에러

//stdout : 표준 출력 
//stderr : 표준 에러
// 각각에 달려있는 data 이벤트 리스너에 버퍼 형태로 잔달됩니다.
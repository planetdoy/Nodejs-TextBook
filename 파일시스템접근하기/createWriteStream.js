const fs = require('fs');
const writeStream = fs.createWriteStream('./파일시스템접근하기/writeme.txt');
writeStream.on('finish',() => {
    console.log('파일 쓰기 완료');
});

writeStream.write('이 글을 씁니다.\n');
console.log('1');
writeStream.write('한 번 더 씁니다.');
console.log('2');
writeStream.end();
// end메서드로 종료를 알리게 되면 이때 finish이벤트가 발생합니다.
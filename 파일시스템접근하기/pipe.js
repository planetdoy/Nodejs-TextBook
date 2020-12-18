//파일을 읽고 스트림을 전달받아 파일을 쓸 수도 있습니다.
//파일 복사와 비슷합니다.
//스트림끼리 연결하는 것을 '파이핑한다'고 표현합니다.

const fs = require('fs');

const readStream = fs.createReadStream('./파일시스템접근하기/readme4.txt');
const writeStream = fs.createWriteStream('./파일시스템접근하기/writeme3.txt');
readStream.pipe(writeStream);
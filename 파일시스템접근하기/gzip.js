//파일을 읽은 후 gzip 방식으로 압축하는 코드입니다.

const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./파일시스템접근하기/readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./파일시스템접근하기/readme4.txt.gz');

readStream.pipe(zlibStream).pipe(writeStream);
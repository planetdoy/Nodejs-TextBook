const fs = require('fs');

console.log('before: ',process.memoryUsage().rss);

const data1 = fs.readFileSync('./파일시스템접근하기/big.txt');
fs.writeFileSync('./파일시스템접근하기/big2.txt',data1);
console.log('buffer: ', process.memoryUsage().rss);
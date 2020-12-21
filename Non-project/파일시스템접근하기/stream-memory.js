const fs = require('fs');

console.log('before:' , process.memoryUsage().rss);

const readStream = fs.createReadStream('./파일시스템접근하기/big.txt');
const writeStream = fs.createWriteStream('./파일시스템접근하기/big3.txt');

readStream.pipe(writeStream);
readStream.on('end',()=>{
    console.log('stream:', process.memoryUsage().rss);
});
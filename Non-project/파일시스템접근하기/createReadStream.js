const fs = require('fs');

const readStream = fs.createReadStream('./파일시스템접근하기/readme3.txt',{highWaterMark:16});
const data = [];

readStream.on('data', (chunk)=>{
    data.push(chunk);
    console.log('data: ', chunk, chunk.length);
});

readStream.on('end', ()=>{
    console.log('end:', Buffer.concat(data).toString());
});

readStream.on('error', (err)=>{
    console.log('error :', err);
})

//highWaterMark : 버퍼의 크기(바이트 크기)를 정할 수 있다. 기본값은 64KB이다.
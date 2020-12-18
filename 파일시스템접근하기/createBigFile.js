const fs = require('fs');
const file = fs.createWriteStream('./파일시스템접근하기/big.txt');

for(let i=0 ; i <= 10000000; i++){
    file.write('hi~ i gonna make a big file. Be Strong little bit! \n');
}
file.end();
const fs = require('fs').promises;

fs.writeFile('./파일시스템접근하기/writeme.txt', '글이 입력됩니다.')
.then(()=>{
    return fs.readFile('./파일시스템접근하기/writeme.txt');
})
.then((data) =>{
    console.log(data.toString());
})
.catch((err)=>{
    console.error(err);
})

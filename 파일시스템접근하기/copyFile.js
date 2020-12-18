const fs = require('fs').promises;

fs.copyFile('./파일시스템접근하기/readme4.txt', './파일시스템접근하기/writeme4.txt') // ( 복사할 파일, 복사될 경로, [복사 후 실행될 콜백함수])
    .then(() => {
        console.log('복사 완료');
    })
    .catch((error) => {
        console.error(error);
    });
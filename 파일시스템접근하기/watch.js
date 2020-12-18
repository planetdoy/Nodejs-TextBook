const fs = require('fs');

fs.watch('./파일시스템접근하기/target.txt', (eventType, filename) => {
    console.log(eventType, filename);
});

//내용 수정 시 change 이벤트가 발생하고 파일명 변경 및 삭제 시 rename 이벤트가 발생합니다.
//rename 이벤트 이후에는 더이상 watch가 수행되지 않습니다. 
// change이벤트가 두번씩 발생하기도 하니 실무에서는 주의가 필요합니다.
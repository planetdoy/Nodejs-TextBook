//프로미스의 에러는 catch하지 않아도 알아서 처리됩니다.
//하지만 버전이 변경됨에 따라 바뀔 수 있으니
//항상 catch를 통해 에러를 잡을 수 있도록 합니다.
const fs = require('fs').promises;

setInterval(()=>{

    fs.unlink('./abcdefg.js');
},1000);
// 각종 편의 기능을 넣어둔 모듈

const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x,y) =>{

    console.log(x+y);

},'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!!');
dontUseMe(1,2);

// 콜백 패턴을 프로미스 패턴으로 변경합니다.
// 바꿀 함수를 인수로 제공하면 됩니다.
// 이렇게 바꿔두면 async/await 패턴까지 사용할 수 있어 좋습니다.
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.error(error);
    });
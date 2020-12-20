const fs = require('fs').promises;
const constants = require('fs').constants;

fs.access('./파일시스템접근하기/folder', constants.F_OK | constants.W_OK | constants.R_OK) //폴더나 파일에 접근할 수 있는지를 체크
.then(()=>{
    return Promise.reject('이미 폴더 있음');
})
.catch((err) => {
    if(err.code === 'ENOENT') {
        console.log('폴더 없음');
        return fs.mkdir('./파일시스템접근하기/folder'); //폴더를 만드는 메서드
    }
    return Promise.reject(err);
})
.then(() => {
    console.log('폴더 만들기 성공');
    return fs.open('./파일시스템접근하기/folder/file.js','w'); // 파일의 아이디를 가져오는 메서드  (fd 변수)
})
.then((fd) => {
    console.log('빈 파일 만들기 성공', fd);
    fs.rename('./파일시스템접근하기/folder/file.js', './파일시스템접근하기/folder/newfile.js'); //파일의 이름을 바꾸는 메서드 , 잘라내기 기능도 있다.
})
.then(() =>  {
    console.log('이름 바꾸기 성공');
})
.catch((err) => {
    console.error(err);
});

/**
 * fs.open(경로, 옵션, 콜백) : 파일의 아이디(fd 변수)를 가져오는 메서드 
 * 파일이 없다면 파일을 생성한 뒤 그 아이디를 가져옵니다. 가져온 아이디를 사용해 fs.read나 , fs.write로
 * 읽거나 쓸 수 있습니다.
 * 두번째 인수로 어떤 동작을 할 것인지를 설정할 수 있습니다.
 * 쓰기 w
 * 읽기 r
 * 기존 파일에 추가 a 
 */
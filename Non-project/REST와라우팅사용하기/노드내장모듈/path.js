const path = require('path');
const string = __filename;

console.log('path.sep:',path.sep); //경로의 구분자 
console.log('path.delimiter:',path.delimiter); //환경변수의 구분자
console.log('-------------------------------------------');
console.log('path.dirname():',path.dirname(string)); //파일이 위치한  경로
console.log('path.extname():',path.extname(string)); //파일의 확장자
console.log('path.basename():',path.basename(string)); // 파일의 이름(확장자 포함)
console.log('path.basename - extname():',path.basename(string,path.extname(string))); // 두번째 인수로 확장자를 넣으면 파일 이름만 출력
console.log('-------------------------------------------');
console.log('path.parse()',path.parse(string)); // 파일 경로를 root, dir, base,ext,name으로 분리합니다.
console.log('path.format():', path.format({
    dir : 'C:\\users\\doy',
    name : 'path',
    ext : '.js',
}));// path.parse()한 객체를 파일 경로로 합칩니다.
console.log('path.normalize():',path.normalize('C://users\\\\doy\\\path.js')); // /나 \의 오류를 정상적인 경로로 변환합니다.
console.log('-------------------------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\')); // 절대경로, 상대경로의 true,false를 알려줍니다.
console.log('path.isAbsolute(./hoem):', path.isAbsolute('./home')); //
console.log('-------------------------------------------');
console.log('path.relative():', path.relative('C:\\users\\doy\\path.js', 'C:\\'));// 경로를 두개 넣으면 첫번째에서 두번째 경로로 가는 방법을 알립니다.
console.log('path.join():', path.join(__dirname,'..','..','/users','.','/doy')); //여러 인수를 넣으면 하나의 경로로 합칩니다.상대경로인 (..),(.)도 알아서 처리합니다.
console.log('path.resolve():',path.resolve(__dirname,'..','users','.','/doy'));// /를 만나면 절대경로로 인식해서 앞의 경로를 무시합니다.
const dep1 = require('./dep1');
const dep2 = require('./dep2');

dep1();
dep2();

//순환참조가 발생하지 않도록 구조를 잘 잡는 것이 중요합니다.
// 순환 참조가 발생하는 이유
// 
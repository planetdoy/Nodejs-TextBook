const url = require('url');

const {URL} = url;
//WHATWG의 url 
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));

console.log('--------------------------------------');

const parseUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
console.log('url.parse():', parseUrl);
console.log('url.format():', url.format(parseUrl));

//url.parse(주소) : 주소를 분해합니다.
// WHATWG 방식과 비교하면 username, password 대신 auth 속성이 있고, searchParams 대신 query가 있습니다.

//url.format(객체) : WHATWG 방식 url방식과 기존 노드의 url을 모두 사용할 수 있습니다.
//분해되었던 url 객체를 다시 원래 상태로 조립합니다.
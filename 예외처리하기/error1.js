// try, catch로 error를 잡는다.
// 에러가 생겨도 프로그램은 진행된다.
setInterval(()=>{
    console.log('시작');
    try{
        throw new Error('서버를 고장내주마!!');
    } catch (err){
        console.error(err);
    }
},1000);
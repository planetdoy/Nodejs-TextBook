/**
 * try/catch로 처리하지 못한 에러가 발생했지만 코드가 실행됩니다.
 * uncaughtException으로 모든 에러를 처리할 것 같지만
 * 노드 공식 문서에서는 보증 하지 않기에 최후의 수단으로 사용할 것을 권장합니다.
 * 에러를 기록하는 것으로만 사용하고 기록 뒤에 process.exit()으로 종료하는 것이 좋습니다.
 */
process.on('uncaughtException',(err) => {
    console.error('예기치 못한 에러',err);
});

setInterval(()=>{
    throw new Error('서버를 고장내주마!');
},1000);

setTimeout(()=>{
    console.log('실행됩니다.');
},2000);
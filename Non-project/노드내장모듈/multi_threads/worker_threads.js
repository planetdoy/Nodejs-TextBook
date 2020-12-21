// 노드에서 멀티 쓰레드 방식으로 작업하는 방법

const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

if (isMainThread){ //부모일 때
    console.log('__filename:', __filename);

    const worker = new Worker(__filename);
    
    worker.on('message', message=>console.log('from worker', message));
    worker.on('exit', ()=> console.log('worker exit'));
    worker.postMessage('ping');

} else { //워커일때
    parentPort.on('message', (value)=>{
        console.log('from parent',value);
        parentPort.postMessage('pong');
        parentPort.close();
    });
}
const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});
myEvent.on('event2', () => {
    console.log('이벤트 2');
});
myEvent.on('event2', () => {
    console.log('이벤트2 추가');
})
myEvent.once('event3', () => {
    console.log('이벤트 3');
})//한 번만 실행됨

myEvent.emit('event1'); // 이벤트 호출
myEvent.emit('event2'); // 이벤트 호출

myEvent.emit('event3'); // 이벤트 호출
myEvent.emit('event3'); // 실행 안됨

myEvent.on('event4', () => {
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
    console.log('이벤트 5');
};

myEvent.on('event5', listener);
myEvent.removeListener('event5',listener);
myEvent.emit('event5'); //실행안됨

console.log(myEvent.listenerCount('event2'));

/**
 * event 모듈을 사용합니다.
 * on(), addListener(), emit(), once(), removeAllListeners(), removeListener(), off(), listenerCount()
 * 
 * 겉으로는 이벤트를 호출하지 않아보이지만 내부적으로는 chunk를 전달할 때마다 data 이벤트를 emit하고 있습니다.
 * 완료시에는 end 이벤트를 emit한 것입니다.
 */
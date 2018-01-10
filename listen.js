var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function(){
	console.log('listener 1 executed');
}
var listener2 = function(){
	console.log('listener 2 executed');
}
var getCountOfListener = function(eventEmitter){
	var numOfListener = require('events').EventEmitter.listenerCount( eventEmitter, 'connection');
	console.log('Therer are ' + numOfListener + ' listeners here.');
}


console.log('-Add Listner 1 and 2');
eventEmitter.on('connection', listener1);
eventEmitter.addListener('connection', listener2);

getCountOfListener(eventEmitter);

console.log('-Emit');
eventEmitter.emit('connection');


console.log('-Remove Listener 1');

eventEmitter.removeListener('connection', listener1);
console.log('-Emit');
eventEmitter.emit('connection');

getCountOfListener(eventEmitter);

console.log('-End');
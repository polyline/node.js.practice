var events = require('events');

var eventEmitter = new events.EventEmitter();

var connetHandler = function connected(){
	console.log('connected');
	eventEmitter.emit('hi');
}

eventEmitter.on('connection', connetHandler);
eventEmitter.on('hi', function(){
	console.log('hi');
})

eventEmitter.emit('connection');

console.log('end');
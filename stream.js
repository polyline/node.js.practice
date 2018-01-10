// Stream is a EventEmitter object

var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');

// There are four common events for Stream
// data, end, err, finish

// notice that we pass data to the anonymous function
readerStream.on('data', function(str){
	data += str;
});
readerStream.on('end', function(){
	console.log('-no more data to read-');
	console.log(data);
});
readerStream.on('err', function(){
	console.log('error');
});

console.log('done')

// we will see the last line will be printed first.
// Since node.js is asychronous, so it doesn't need to wait.

var fs = require('fs');
data = 'Hello World!';

var writerStream = fs.createWriteStream('output.txt');

// Compared to reading, we need to specify what to write.
writerStream.write(data, 'UTF8');

// It is important to mark end of file
writerStream.end();

// use finish 
writerStream.on('finish', function(){
	console.log('Finish writing!');
});

writerStream.on('err', function(err){
	console.log(err.stack);
})

console.log('done');
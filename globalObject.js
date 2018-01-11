// Get the current directory name
console.log(__dirname);

// setTimeout(callback, time)

// This simulate the situation that 
// A say hello! to B
// and B receive signal
// B say hello! back to A

/*
var say = function(callback){
	console.log("A & B conversation starts");
	setTimeout(function(){
		//A: 

		console.log('A: Hello!');
		callback('Hello!');
	}, 1000);
}

say(function(response){
	// B receive A

	console.log("B: recieved: " + response);

	setTimeout(function(){
		// B: 
		
		console.log('B: Hello!');
	}, 1000);
});
*/

// Try if we could make it look more intuitional
var say = function(word){
	console.log(word);
}
var conversation = function(callback){
	console.log('start!')
	say('A: Hello');
	callback('A: Hello');
}
conversation(function(response){
	console.log('receive ' + response);
	say('B: Hello');
})



//clearTimeout(t);
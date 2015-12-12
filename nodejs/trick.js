console.log(++[
    []
][+[]] + [+[]]);

var counter = 0 ;

var play = function(counter,done){
	console.log(counter);
	done();
};

var playLoop = function(){

	counter++;

	play(counter,function(sprite,animation){
		playLoop();
	});

};

playLoop();
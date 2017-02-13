console.log(++[
    []
][+[]] + [+[]]);

let counter = 0;

let play = function(counter, done) {
  console.log(counter);
  done();
};

let playLoop = function() {

  counter++;

  play(counter, function(sprite, animation) {
    playLoop();
  });

};

playLoop();

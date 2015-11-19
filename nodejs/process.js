//node argv.js 1991 name=byvoid --v "Carbo Kuo"
console.log("process.argv",process.argv);
console.log("process.cwd()",process.cwd());
console.log("process.execPath",process.execPath);
//console.error("error","this is error");
//console.trace();

function doSomething(callback) {
	console.log("first");
	//callback();
	process.nextTick(callback);
};

doSomething(function onEnd() {
	console.log("second");
});






process.stdin.setEncoding('utf8');
process.stdin.resume();

process.stdin.on('data', function(data) {
	//var chunk = process.stdin.read();
	//process.stdout.write('\nread from console: ' + chunk);
	process.stdout.write('\nread from console: ' + data.toString());
});

process.stdin.on('end', function() {
  process.stdout.write('end');
});

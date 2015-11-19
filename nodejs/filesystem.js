var fs = require('fs');

// var path = 'E:\\github\\nodejs-demo\\basics\\this.js';   //true
// var path = './this.js'; //true


// var path = './*.js'; //true
// fs.exists(path, function(exist) {
//     console.log(path, exist);
// });

fs.readdir('.', function(err, files) {
    console.log(files);
});
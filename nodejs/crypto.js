var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
var clientProtos = require('./clientProtos.json');
var serverProtos = require('./serverProtos.json');



// var sb =fs.readFileSync("./sb.json","utf-8");



//JSON.stringify(clientProtos) + JSON.stringify(serverProtos);


var protoStr = JSON.stringify(clientProtos) + JSON.stringify(serverProtos);

fs.writeFile('./fuck.txt',protoStr,function(err){
        if(err) throw err;
        console.log('has finished');
    });

var version = crypto.createHash('md5').update(protoStr,'utf8').digest('base64');

console.log('version',version);


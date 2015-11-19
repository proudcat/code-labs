/**
 * 正则表达式
 */
var is = require('is_js');
console.log("---------------------- Basic --------------------");

var str="Is this all there is?";
var pattern = /is/gi;// same to new RegExp
console.log("g   :",str.match(new RegExp("is","g")));
console.log("gi  :",str.match(new RegExp("is","gi")));
console.log("    :",str.match(new RegExp("is")));

result = pattern.exec(str);
console.log(result);

console.log("---------------------- Valid --------------------");

// var passport = /^[0-9a-zA-Z][0-9a-zA-Z_]{4,14}[0-9a-zA-Z]$/; 
// var name = /^[\u4e00-\u9fa5]+$/; 
var nickName = /[a-zA-Z0-9_\u4E00-\u9FA5]{2,10}/;
// var pwd = /[^?!.*\s]{6,20}/;
console.log(nickName.test("  "));
console.log(nickName.test("xiao"));
console.log(nickName.test("f哈哈"));
console.log(nickName.test("罗宾"));

var safeCode = /^\d{11}$/;
console.log(safeCode.test("11122223333"));
console.log(safeCode.test("123456789123456789"));

var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var output = ["---------- Original String\n", names + "\n"];

var pattern = /\s*;\s*/;
var nameList = names.split(pattern);
pattern = /(\w+)\s+(\w+)/;
var bySurnameList = [];

output.push("---------- After Split by Regular Expression");

var i, len;
for (i = 0, len = nameList.length; i < len; i++) {
    output.push(nameList[i]);
    bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
}

output.push("---------- Names Reversed");
for (i = 0, len = bySurnameList.length; i < len; i++) {
    output.push(bySurnameList[i]);
}

bySurnameList.sort();
output.push("---------- Sorted");
for (i = 0, len = bySurnameList.length; i < len; i++) {
    output.push(bySurnameList[i]);
}

output.push("---------- End");

console.log(output.join("\n"));
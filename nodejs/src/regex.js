/*
 字符串与正则表达式的例子
 */

//字符串
var str = "this string \
is broken \
across multiple\
lines."
console.log(str); // this string is broken across multiplelines.

var poem =
    "Roses are red,\n\
Violets are blue.\n\
I'm schizophrenic,\n\
And so am I."
console.log(poem);

var x = "\u00A9 Netscape Communications";
console.log(x);




//正则表达式
var re = /ab+c/
var ree = nwe RegExp("ab+c");

var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");

var myArray = /d(b+)d/g.exec("cdbbdbsbz");

var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsdbbbbbdbz");
console.log(myArray);


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
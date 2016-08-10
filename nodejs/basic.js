var a = 123;
var b = null;
var c;

console.log(a || {});
console.log(b || []);
console.log(c || "gogogo");

console.log("---------------------- typeof --------------------");

/*
	1. typeof 是一个操作符,主要的目的是检测一个变量是不是基本数据类型的变量,
		同时也可以说是确定一个变量是字符串,数值,布尔值,还是undefined的最佳工具.
*/
var type_arr = [];
var type_null = null;
var type_object = {};
var type_date = new Date();

console.log(typeof type_arr);
console.log(type_null, typeof type_null); //"object"
console.log(type_object, typeof type_object); //"object"
console.log(type_date, typeof type_date); //"object"
console.log("dontExist", typeof dontExist); //"object"

console.log("Array", typeof Array); // "function"
console.log("Number", typeof Number); // "function"
console.log("Function", typeof Function); // "function"
console.log("Date", typeof Date); // "function"
console.log("Math", typeof Math); // "object"
console.log("RegExp", typeof RegExp); // "function"
console.log("string", typeof String); // "function"
console.log("null",typeof null);
console.log("undefinded",typeof undefined);

console.log("---------------------- instanceof --------------------");
/*
	2. instanceof 主要的目的是检测引用类型,variable instanceof constructor !
	其实typeof和instanceof的目的都是检测变量的类型,
	两个的区别在于typeof一般是检测的是基本数据类型,
	instanceof主要检测的是引用类型!
*/

var inst_array = [];
var inst_object = {};
var inst_regexp = new RegExp();

function inst_func() {}
var inst_func1 = new inst_func();

console.log(inst_array instanceof Array); //"true"
console.log(inst_object instanceof Object); //"true"
console.log(inst_regexp instanceof RegExp); //"true"
console.log(inst_func1 instanceof inst_func); //"true"

console.log("---------------------- Number --------------------");

var min = 0xFFFF;
console.log(min);

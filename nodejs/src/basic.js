/*
 演示最基本的js相关语法与特性
 */


console.log("---------------------- typeof --------------------");
/*
	1. typeof 是一个操作符,主要的目的是检测一个变量是不是基本数据类型的变量,
		同时也可以说是确定一个变量是字符串,数值,布尔值,还是undefined的最佳工具.
*/

var type_str = "zhangqian";
var type_bool = true;
var type_number = 10;
var type_d;
var type_null = null;
var type_object = new Object();
var type_func = new Function("5+2");
var type_date = new Date();

console.log(type_str, typeof type_str); //"string"
console.log(type_bool, typeof type_bool); //"number"
console.log(type_number, typeof type_number); //"boolean"
console.log(type_d, typeof type_d); //"undefined"
console.log(type_null, typeof type_null); //"object"
console.log(type_object, typeof type_object); //"object"
console.log(type_func, typeof type_func); //"function"
console.log(type_date, typeof type_date); //"object"
console.log("dontExist", typeof dontExist); //"object"

console.log("Array", typeof Array); // "function"
console.log("Number", typeof Number); // "function"
console.log("Function", typeof Function); // "function"
console.log("Date", typeof Date); // "function"
console.log("Math", typeof Math); // "object"
console.log("RegExp", typeof RegExp); // "function"
console.log("string", typeof String); // "function"


console.log("---------------------- instanceof --------------------");
/*
	2. instanceof 主要的目的是检测引用类型,variable instanceof constructor !
	其实typeof和instanceof的目的都是检测变量的类型,
	两个的区别在于typeof一般是检测的是基本数据类型,
	instanceof主要检测的是引用类型!
*/

var inst_array = new Array();
var inst_object = new Object();
var inst_regexp = new RegExp();

function inst_func() {};
var inst_func1 = new inst_func();

console.log(inst_array instanceof Array); //"true"
console.log(inst_object instanceof Object); //"true"
console.log(inst_regexp instanceof RegExp); //"true"
console.log(inst_func1 instanceof inst_func); //"true"



console.log("---------------------- undefinded --------------------");
/*
	3. undefinded
*/

undef_foo();
var ret = undef_foo(123);
console.log("ret", ret);

function undef_foo(argument) {
    console.log("argument", argument);
};

var undef_a;
console.log("The value of a is " + undef_a); // "The value of a is undefined"

console.log(undef_x === undefined); // "true"
var undef_x = 3;

var myvar = "my value";

var c = (function(arg) {
    console.log(myvar); // "undefined"
    var myvar = "local value";
})();



console.log("---------------------- scop --------------------");
/*
	4. scop
*/

function scop_hehe(argument) {
    if (true) {
        var x = 5;
    }
    console.log(x);
};

scop_hehe(); // "5"


/*
	6. object
*/
var foo = {
    a: "alpha",
    2: "two"
};

console.log(foo.a); // "alpha"
console.log(foo[2]); // "two"
//console.log(foo.2);  // "Error: missing ) after argument list"
//console.log(foo[a]); // "Error: a is not defined"
console.log(foo["a"]); // "alpha"
console.log(foo["2"]); // "two"


console.log("---------------------- Number --------------------");
/*
	4. scop
*/

var min = 0xFFFF;
console.log(min);
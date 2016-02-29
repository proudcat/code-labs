/*
 演示函数的基本使用方法
 */


console.log("---------------------- apply & call --------------------");
/*
	1. apply
		作用：函数的劫持与对象的复制。利用Apply的参数数组化来提高效率。
		签名：Function.apply(obj,args)方法能接收两个参数
			obj：这个对象将代替Function类里this对象
			args：这个是数组，它将作为参数传给Function（args-->arguments）
	
	2.  call
		作用:和apply的意思一样,只不过是参数列表不一样.
 		签名：Function.call(obj,[param1[,param2[,…[,paramN]]]])
			obj：这个对象将代替Function类里this对象
			params：这个是一个参数列表

    注意：
        使用他们做继承会使所有子类中都会有一份父类函数的副本，浪费内存。
        最为优雅简洁的方式应该算是基于原型（prototype）继承。    
 */

var apply_numbers = [4, 100, 30, 33, 9, 2];
//Math.max(5,7,9,3,1,6)
console.log("max:", Math.max.apply(null, apply_numbers));
//var aaaa = 5
//console.log([aaaa]);
//console.log("max:",Math.max([aaaa]));

var apply_numbers2 = new Array("1", "2", "3");
Array.prototype.push.apply(apply_numbers, apply_numbers2);
console.log("push:", apply_numbers);
// 一般在目标函数只需要n个参数列表,
// 而不接收一个数组的形式（[param1[,param2[,…[,paramN]]]]）,
// 可以通过apply的方式巧妙地解决这个问题!

function Apply_Person(name, age) {
    this.name = name;
    this.age = age;
}

function Apply_Student(name, age, grade) {
    // 属性继承
    Apply_Person.apply(this, arguments);
    //Person.call(this, name, age);
    this.grade = grade;
}

var apply_student = new Apply_Student("zhangsan", 21, "一年级");

console.log("name:" + apply_student.name + " " + "age:" + apply_student.age + " " + "grade:" + apply_student.grade);
// 输出: name:zhangsan age:21  grade:一年级
// 分析: Person.apply(this, arguments);
// this: 在创建对象在这个时候代表的是student。
// arguments: 是一个数组,也就是 [“zhangsan”, ”21”, ”一年级”];
// 用student去执行Person这个类里面的内容, 在Person这个类里面存在 this.name等之类的语句,这样就将属性创建到了student对象里面。


var apply_func = new function() {
        this.a = "apply_func";
    };

var apply_myfunc = function(x, y) {
    var a = "apply_myfunc";
    console.log(this.a);
    console.log(x + y);
};

apply_myfunc.call(apply_func, "var", "fun"); // "func" "var fun"
apply_myfunc.apply(apply_func, ["var", "fun"]); // "func" "var fun"
//改变对象的this指向的内容



console.log("---------------------- bind --------------------");
/*
    3. bind
        改变this指向。
        截获函数调用，为函数增加实参数目。
*/
var bind_person = {
    name: 'Andrew',
    job: 'web front end developer',
    gender: 'male',
    sayHello: function() {
        return 'Hi, I am ' + this.name + ', a ' + this.job;
    }
};

console.log(bind_person.sayHello());
//Hi, I am Andrew, a web front end developer

var anotherGuySayHello = bind_person.sayHello.bind({
    name: 'Alex',
    job: 'back end C# developer'
});

console.log(anotherGuySayHello());
// Hi, I am Alex, a back end C# developer


function add(arg1, arg2, arg3, arg4) {
    return arg1 + ' ' + arg2 + ' ' + arg3 + ' ' + arg4;
}

var addMore = add.bind(null, 'a', 'b');

console.log(addMore('c', 'd')); // a b c d


var func = new function() {
        this.a = "func";
    };

var myfunc = function(x, y) {
    var a = "myfunc";
    console.log(this.a);
    console.log(x + y);

};

myfunc.call(func, "var", "fun"); // "func" "var fun"
myfunc.apply(func, ["var", "fun"]); // "func" "var fun"



console.log("---------------------- arguments --------------------");
/*
    4. arguments
*/

function args_test(a, b, c) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);

    console.log("typeof c === undefined", typeof c === "undefined");
    console.log("typeof c == undefined", typeof c == "undefined");
    console.log("c == null", c == null);
    console.log("c === null", c === null);
};

args_test("", 0);

console.log("---------------------- caller --------------------");
/*
    5. caller
        返回一个对函数的引用，即调用了当前函数的函数体。
        functionName.caller ：functionName 对象是所执行函数的名称。
        说明
            对于函数来说，caller 属性只有在函数执行时才有定义。 
*/

function caller_CallLevel() {
    if (caller_CallLevel.caller == null) {
        console.log("CallLevel was called from the top level.");
    } else {
        console.log("CallLevel was called by another function:\n" + caller_CallLevel.caller);
    }
}

function caller_funCaller() {
    caller_CallLevel();
}

//caller_CallLevel();

caller_funCaller();



console.log("---------------------- callee --------------------");
/*
    5. callee
        返回正被执行的 Function 对象，也就是所指定的 Function 对象的正文。
        arguments 对象的一个成员,arguments.length 是实参长度,arguments.callee.length 是形参长度;
        由此可以判断调用时形参长度是否和实参长度一致。 
*/

// callee可以打印其本身
function calleeDemo() {
    console.log(arguments.callee);
}

// 用于验证参数
function calleeLengthDemo(arg1, arg2) {
    if (arguments.length == arguments.callee.length) {
        console.log("验证形参和实参长度正确！");
        return;
    } else {
        console.log("实参长度：" + arguments.length);
        console.log("形参长度： " + arguments.callee.length);
    }
}

//递归计算
var sum = function(n) {
    if (n <= 0) {
        return 1;
    } else {
        return n + arguments.callee(n - 1);
    }
};

calleeDemo();
calleeLengthDemo(123, "ddd", 485);
calleeLengthDemo();
calleeLengthDemo(1, 2);
console.log("sum(10)", sum(10));
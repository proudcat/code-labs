var myObject = function(name) {
    this.name = name;
    this.age = 123;
};


myObject.prototype.hehe = "fish";

myObject.prototype.say = function(){
  console.log("saying",this.hehe);
};

var w1 = new myObject('i am w1');
var w2 = new myObject('i am w2');
console.log(w1.age === w2.age);
w1.age = 234;
w1.hehe = 'hi w1';
w2.name = 'i am w222';
console.log('w1.hehe',w1.hehe);
console.log('w2.hehe',w2.hehe);
console.log('w1.name',w1.name);
console.log('w2.name',w2.name);
w2.say();
w1.say();
console.log(w1.age === w2.age);


var o1 = {};

function f1() {}
var f2 = function() {};
var f3 = new Function('str', 'console.log(str)');

f3('aabb'); // aabb
console.log('typeof Object:' + typeof Object); //function
console.log('typeof Function:' + typeof Function); //function
console.log('typeof o1:' + typeof o1); //object
console.log('typeof f1:' + typeof f1); //function
console.log('typeof f2:' + typeof f2); //function
console.log('typeof f3:' + typeof f3); //function


var hehe = {
    name: "xiaohei",
    age: 200
};
var myCar = {};
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
myCar.prototype = hehe;

console.log(myCar.prototype);

function showProps(obj, objName) {
    var result = "";
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + "." + i + " = " + obj[i] + "\n";
        }
    }
    return result;
}
console.log(showProps(myCar, "myCar"));

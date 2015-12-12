console.log(typeof null);
console.log(typeof undefined);
console.log(typeof a);
var b;
console.log(typeof b);

/*
//语法
function square(number) {
  return number * number;
}

//函数表达式  匿名函数
var square = function(number) {return number * number};
var factorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)};

function map(f,a) {
  var result = [], // Create a new Array
      i;
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}

map(function(x) {return x * x * x}, [0, 1, 2, 5, 10]);
*/


/*
//closure
var pet = function(name) {          // The outer function defines a variable called "name"
      var getName = function() {
        return name;                // The inner function has access to the "name" variable of the outer function
      }

      return getName;               // Return the inner function, thereby exposing it to outer scopes
    },
    myPet = pet("Vivie");
    
myPet();                            // Returns "Vivie"




var createPet = function(name) {
  var sex;
  
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet("Vivie");
pet.getName();                  // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex();                   // male
pet.getName();                  // Oliver



var getCode = (function(){
  var secureCode = "0]Eal(eh&2";    // A code we do not want outsiders to be able to modify...
  
  return function () {
  	console.log("getCode.....");
    return secureCode;
  };
})();

getCode();    // Returns the secret code
*/


/*//arguments
function myConcat(separator) {
  console.log("invoked...");
   for (var i = 0; i < arguments.length; i++) {
      console.log(i,arguments[i]);
   }
};

myConcat(", ", "red", "orange", "blue");
myConcat();
*/

// console.log("--------------------------------------");
// var d = new Date();
// var myCar = {};
// myCar.make = "Ford";
// myCar.model = "Mustang";
// myCar.year = 1969;

// function showProps(obj, objName) {
//     var result = "";
//     for (var i in obj) {
//         if (obj.hasOwnProperty(i)) {
//             result += objName + "." + i + " = " + obj[i] + "\n";
//         }
//     }
//     return result;
// }
// console.log(showProps(myCar, "myCar"));

// function listAllProperties(o) {
//     var objectToInspect;
//     var result = [];

//     for (objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
//         result = result.concat(Object.getOwnPropertyNames(objectToInspect));
//     }

//     return result;
// }


/*var arr = new Array(element0, element1, ..., elementN);
var arr = Array(element0, element1, ..., elementN);
var arr = [element0, element1, ..., elementN];

var arr = new Array(arrayLength);
var arr = Array(arrayLength);
var arr = [arrayLength];
// This has exactly the same effect
var arr = [];
arr.length = arrayLength;*/

/*
var arr = ["one", "two", "three"];
console.log(arr[2]);;  // three
console.log(arr["length"]);  // 3


var colors = ['red', 'green', 'blue'];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}


colors.forEach(function(color) {
  console.log(color);
});

var myArray = new Array("1", "2", "3");
myArray = myArray.concat("a", "b", "c"); // myArray is now ["1", "2", "3", "a", "b", "c"]

var myArray = new Array("Wind", "Rain", "Fire");
var list = myArray.join(" - "); // list is "Wind - Rain - Fire"

var myArray = new Array("1", "2");
myArray.push("3"); // myArray is now ["1", "2", "3"]


var myArray = new Array("1", "2", "3");
var last = myArray.pop(); // myArray is now ["1", "2"], last = "3"

var myArray = new Array ("1", "2", "3");
var first = myArray.shift(); // myArray is now ["2", "3"], first is "1"

var myArray = new Array ("1", "2", "3");
myArray.unshift("4", "5"); // myArray becomes ["4", "5", "1", "2", "3"]

var myArray = new Array ("a", "b", "c", "d", "e");
myArray = myArray.slice(1, 4); // starts at index 1 and extracts all elements  until index 3, returning [ "b", "c", "d"]

var myArray = new Array ("1", "2", "3", "4", "5");
myArray.splice(1, 3, "a", "b", "c", "d"); // myArray is now ["1", "a", "b", "c", "d", "5"]
  // This code started at index one (or where the "2" was), removed 3 elements there, 
  // and then inserted all consecutive elements in its place.

var myArray = new Array("Wind", "Rain", "Fire");
myArray.sort(); // sorts the array so that myArrray = [ "Fire", "Rain", "Wind" ]

var sortFn = function(a, b){
  if (a[a.length - 1] < b[b.length - 1]) return -1;
  if (a[a.length - 1] > b[b.length - 1]) return 1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
}
myArray.sort(sortFn); // sorts the array so that myArray = ["Wind","Fire","Rain"]


var a = ['a', 'b', 'a', 'b', 'a'];
alert(a.indexOf('b')); // Alerts 1
// Now try again, starting from after the last match
alert(a.indexOf('b', 2)); // Alerts 3
alert(a.indexOf('z')); // Alerts -1, because 'z' was not found


var a = ['a', 'b', 'c', 'd', 'a', 'b'];
alert(a.lastIndexOf('b')); // Alerts 5
// Now try again, starting from before the last match
alert(a.lastIndexOf('b', 4)); // Alerts 1
alert(a.lastIndexOf('z')); // Alerts -1
*/

/*
var a = ['a', 'b', 'c'];
a.forEach(console.log); // Alerts each item in turn

var a1 = ['a', 'b', 'c'];
var a2 = a1.map(function(item) { return item.toUpperCase(); });
alert(a2); // Alerts A,B,C

var a1 = ['a', 10, 'b', 20, 'c', 30];
var a2 = a1.filter(function(item) { return typeof item == 'number'; });
alert(a2); // Alerts 10,20,30

function isNumber(value){
  return typeof value == 'number';
}
var a1 = [1, 2, 3];
alert(a1.every(isNumber)); // Alerts true
var a2 = [1, '2', 3];
alert(a2.every(isNumber)); // Alerts false

function isNumber(value){
  return typeof value == 'number';
}
var a1 = [1, 2, 3];
alert(a1.some(isNumber)); // Alerts true
var a2 = [1, '2', 3];
alert(a2.some(isNumber)); // Alerts true
var a3 = ['1', '2', '3'];
alert(a3.some(isNumber)); // Alerts false

var str = 'abcdef';
var consonantsOnlyStr = Array.filter(str, function (c) !(/[aeiou]/i).test(c)).join(''); // 'bcdf'
var vowelsPresent = Array.some(str, function (c) (/[aeiou]/i).test(c)); // true
var allVowels = Array.every(str, function (c) (/[aeiou]/i).test(c)); // false
var interpolatedZeros = Array.map(str, function (c) c+'0').join(''); // 'a0b0c0d0e0f0'
var numerologicalValue = Array.reduce(str, function (c, c2) c+c2.toLowerCase().charCodeAt()-96, 0);
// 21 (reduce() since JS v1.8)

var numbers = [1, 2, 3, 4];
var doubled = [i * 2 for (i of numbers)];
alert(doubled); // Alerts 2,4,6,8

var doubled = numbers.map(function(i){return i * 2;});


var numbers = [1, 2, 3, 21, 22, 30];
var evens = [i for (i of numbers) if (i % 2 === 0)];
alert(evens); // Alerts 2,22,30

var evens = numbers.filter(function(i){return i % 2 === 0;});

var str = 'abcdef';
var consonantsOnlyStr = [c for (c of str) if (!(/[aeiouAEIOU]/).test(c))  ].join(''); // 'bcdf'
var interpolatedZeros = [c+'0' for (c of str) ].join(''); // 'a0b0c0d0e0f0'
*/
/*
var booleanObjectName = new Boolean(true);
console.log("booleanObjectName",typeof booleanObjectName);
var arr = [];
var obj = {};
console.log("arr",typeof arr);
console.log("obj",typeof obj);
var num = 123;
console.log("num",typeof num);

var nn;
console.log("value",typeof value);
console.log("nn",nn);

function isNumber(value){
  return typeof value == 'number';
}
var fuck = isNumber;

console.log("func",typeof isNumber);*/

/*var Xmas95 = new Date("December 25, 1995");
var today = new Date();
console.log("date:",today.getFullYear());*/

// console.log("-------------------------------");



// var myObject = {
//     variableKey: 123,
//     functionKey: function() {
//         console.log("hahah");
//     }
// }
// console.log(myObject.variableKey);
// myObject.functionKey();



console.log("-------------------------------");

for (var i = 0; i <= 5; i++) {
  console.log("i",i);
};

console.log("iiii",i);
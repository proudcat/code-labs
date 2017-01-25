/**
 * 正则表达式
 */

let pattern;


let shit = /^([\u4E00-\u9FA5A-Za-z0-9_]|[.]|[,]|[，]|[。]|[!,#,！,-,(,),（,）]|[_]|[——][-]){2,50}$/;
//
//
console.log(/^([0-9]{16,19})$/.test("哈哈"));
console.log(shit.test("哈哈22"));
console.log(shit.test("  "));

console.log("---------------------- Basic --------------------");

let str = "Is this all there is?";
pattern = /is/gi; // same to new RegExp
console.log("g   :", str.match(new RegExp("is", "g")));
console.log("gi  :", str.match(new RegExp("is", "gi")));
console.log("    :", str.match(new RegExp("is")));

let result = pattern.exec(str);
console.log(result);

console.log("---------------------- Validation --------------------");

// let passport = /^[0-9a-zA-Z][0-9a-zA-Z_]{4,14}[0-9a-zA-Z]$/;
// let name = /^[\u4e00-\u9fa5]+$/;
let nickName = /[a-zA-Z0-9_\u4E00-\u9FA5]{2,10}/;
// let pwd = /[^?!.*\s]{6,20}/;
console.log(nickName.test("  "));
console.log(nickName.test("xiao"));
console.log(nickName.test("f哈哈"));
console.log(nickName.test("罗宾"));

let safeCode = /^\d{11}$/;
console.log(safeCode.test("11122223333"));
console.log(safeCode.test("123456789123456789"));

let names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

let output = ["---------- Original String\n", names + "\n"];

pattern = /\s*;\s*/;
let nameList = names.split(pattern);

pattern = /(\w+)\s+(\w+)/;
let bySurnameList = [];

output.push("---------- After Split by Regular Expression");

let i, len;
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

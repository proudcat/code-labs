//
//  main.swift
//  apple
//
//  Created by koala on 11/23/15.
//  Copyright © 2015 koala. All rights reserved.
//

import Foundation

print("Hello, World!")


//1. let声明常量，var声明变量

// 各种进制的字面量表示
let decimalInteger = 17
let binaryInteger = 0b10001       // 17 in binary notation
let octalInteger = 0o21           // 17 in octal notation
let hexadecimalInteger = 0x11     // 17 in hexadecimal notation

// 更易于阅读的写法
let paddedDouble = 000123.456
let oneMillion = 1_000_000
let justOverOneMillion = 1_000_000.000_000_1


//2. 定义类型别名 typealias
typealias AudioSample = UInt16

// decompose一个tuple时，对于不想使用的元素用’_’接收
let http404Error = (404, "Not Found")
let (justTheStatusCode, _) = http404Error
print("The status code is \(justTheStatusCode)")
// prints "The status code is 404

let possibleNumber = "123"
let convertedNumber = Int(possibleNumber)


//3. array
var arr = ["hello", "world"]
var brr = arr
brr[0] = "haw"
print(brr)     // ["haw", "world"]
print(arr )    // ["hello", "world"]
brr.insert("aaaaaa", atIndex: 0)
print(brr)
print(arr)


var threeDoubles = Double[](count: 3, repeatedValue: 0.0)
// threeDoubles is of type Double[], and equals [0.0, 0.0, 0.0]
var anotherThreeDoubles = Array(count: 3, repeatedValue: 2.5)
// anotherThreeDoubles is inferred as Double[], and equals [2.5, 2.5, 2.5]



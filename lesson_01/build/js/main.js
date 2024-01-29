"use strict";
let user = "Hello";
console.log(user);
let a = 4;
let b = 6;
let c = 7;
console.log(a / c);
let isLoading;
let num;
let reg = /\w/g;
let hp;
let myArr = ["hello", "world"];
let myArr2;
let obj = {
    prop: "first",
    prop2: "second"
};
let elon = {
    name: "elon",
    age: 13,
    accomplishments: ["SpaceX", "OpenAI", "Tesla"]
};
console.log(elon);
console.log(typeof elon);
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 0] = "A";
    Grade[Grade["B"] = 1] = "B";
    Grade[Grade["C"] = 2] = "C";
})(Grade || (Grade = {}));
console.log("Grade A =", Grade.A);

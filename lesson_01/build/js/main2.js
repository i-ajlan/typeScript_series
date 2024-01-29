"use strict";
// type aliases
//literal type
let typeliteral;
//functions
const add = (a, b) => {
    return a + b;
};
const mult = (a, b) => { return a * b; };
//optional param
const add2 = (a, b, c) => {
    if (typeof c === "undefined") {
        return a + b;
    }
    return a + b + c;
};
//default param
const show = (p) => {
    console.log(p);
};
const add3 = (a = 10, b, c = 2) => {
    return a + b + c;
};
show(add3(undefined, 4));
//Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => { return prev + curr; });
};
show(total(10, 1, 2, 3, 8));

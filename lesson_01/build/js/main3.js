"use strict";
let a1 = 'hello';
let b1 = a1; //less specific
let c1 = a1; //more specific
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//Be careful! TS sees no problem but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
10;
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;

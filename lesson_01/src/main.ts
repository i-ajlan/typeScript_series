let user = "Hello";

console.log(user);

let a: number = 4;
let b: number = 6;
let c: number = 7;
console.log(a/c);

let isLoading: boolean | number;
let num: number | string;
let reg: RegExp = /\w/g;
let hp: any;

let myArr:string[] = ["hello", "world"];

let myArr2:(boolean | string)[];

let obj:object={
    prop:"first",
    prop2:"second"        
}

interface Physicist{
    name:string,
    age?:number,
    accomplishments:string[]
}

let elon:Physicist={
    name: "elon",
    age: 13,
    accomplishments:["SpaceX", "OpenAI", "Tesla"]
}

console.log(elon);

console.log(typeof elon);


enum Grade{
    A,
    B,
    C
}

console.log("Grade A =", Grade.A);

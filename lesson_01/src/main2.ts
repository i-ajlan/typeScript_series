// type aliases

type stringOrNumber = string | number;

//literal type

let typeliteral:'John' | "Frank";

//functions

const add =(a:number, b:number):number =>{
    return a+b;
}

type mathFunction = (a:number, b:number)=>number;

const mult:mathFunction=(a,b)=>{return a*b};

//optional param

const add2 = (a:number, b:number, c?:number):number=>{
    if(typeof c === "undefined"){
        return a+b;
    }
    return a+b+c;
}

//default param
const show = (p:any):void=>{
    console.log(p);
    
}

const add3 = (a:number = 10, b:number, c:number=2):number=>{
    return a+b+c;
} 

show(add3(undefined,4));

//Rest parameters

const total = (a:number, ...nums:number[]):number => {
    return a + nums.reduce((prev, curr)=>{return prev+curr})
}

show(total(10,1,2,3,8));


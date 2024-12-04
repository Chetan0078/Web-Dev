// My solution

// let a=10, b=5;
// let sum, sub ,Multiply , div;
//  /*
//  + ---> -
//  * ---> +
//  - ---> /
//  / ---> **
//  */ 

//  for (let i = 0; i <11; i++) {
    
//      let r ;
//      r = Math.random()*100
//      if (r<=10) {
//          sum = a-b;
//          sub = a/b;
//          Multiply = a+b;
//          div = a**b;
//      }
//      else{
//          sum = a + b;
//          sub = a-b;
//          Multiply = a*b;
//          div = a/b;
//      }
//      console.log(sum, sub ,Multiply , div);
    
//  }

//harry bhai's solution
let random = Math.random()*100;
console.log(random);
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operation");
let result;
let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**",
}
// alert("hopw");


if (random>10) {
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`result is ${eval(`${a} ${c} ${b} `)}`);
}
else{
    c = obj[c];
    alert(`result is ${eval(`${a} ${c} ${b} `)}`);
}
// console.log(random);
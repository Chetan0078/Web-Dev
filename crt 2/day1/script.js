// let a,b,c;
// a = 3;
// b= 4;
// c = -8;
// d = a*b*c;
// if (d<0) {
//     alert("The multiplication is negative!")
// }
// else{
//     alert("The product is positive!")


// let n = prompt('enter the num you want');

// for (let i = 0; i <=n; i++) {
//     if (i%2==0) {
//         alert("this number is even");
//     } else {
//         alert("THis num is odd");
//     }
    
// }
// let a = 97;
// let b = 99;
// let c = 99;
// let d = 90;
// let e = 89;
// let avg1 ,avg ;
// avg1 = a+b+c+d+e;
// avg = avg1/5;
// console.log(avg);
// if (avg<60) {
//     console.log('you got f grade');
// }
// else if ((60<avg)&&(avg<70)) {
//     console.log('you got d grade');
// }
// else if ((70<avg)&&(avg<80)) {
//     console.log('you got c grade');
// }
// else if ((80<avg)&&(avg<90)) {
//     console.log('you got b grade');
// }
// else{
//     console.log('you got a grade');
// }



// let sum = 0;
// for (let i = 1; i < 100; i++) {
//     if (i%3==0 && i%5!==0) {
//         console.log("fizz");  
//     }
//     else if (i%5==0 && i%3!==06) {
//         console.log("buzz");
//     }
//     else if ((i%3==0)&&(i%5==0)) {
//         console.log("fizz buzz");
//     }
//     else{
//         console.log("not divisible by 3,5");
//     }
// }


let a = 456;
let a1,a2,a3 , x,y;
a3 = a%10;
x = a - a3;
a2 = x%100;
y = a - `${a2}` + `${a3}`;
a1 = a%1000;

console.log(a1,a2,a3);
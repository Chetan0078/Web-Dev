// let a = 10;
// let b = 20;
// console.log(a++ + ++b + --b -a++ + b--);
// console.log(a,b)

//here special is post inc update memory first than it come on cosole but pre inc is just opposite to it 
//== is give implicit type consversion when there are two type of datatypes
//=== is explicit type conversion , it also check the datatype of the variable

// let c= 1000;
// let aString = String(c);
// let aNumber = Boolean(aString);
// console.log(typeof aNumber,aNumber);

//let's learn functions

// function add(a,b) {
//     let sum = a+b;
//     console.log(sum);
// }
// add(3,5)

// function armstrong(n) {
    
//     for (let i= 100; i< n; i++) {
//         let a= i%10;//last no
//          let b= i-a;
//         b=b/10;
//         let c=b%10;//second last
//         let d = b-c;
//         d=d/10;
//         e=d%10;//first 
        
        
//        if(((e*e*e)+(c*c*c)+(a*a*a))==i){
//         console.log(i);
    
//        }
// }    
// }
// armstrong(1000);
//arrays
// let a = [{
//     name:"aakash", score:100//0
// },{
//     name:"aayush", score:110//1
// },{
//     name:"harshal", score:90//2
// },{
//     name:"chetan", score:10//3
// }] 

//to sort correctically 
// console.log(a.sort(function (a,b) {
//     return a.score-b.score;
// }))
// console.log(a.splice(2,2,{name:"aaditya",score:94}, {name:"bhavil",score:30}))

// let arr = ['jazz', 'blues']
// arr.push("Rock-n-Rolls");
// arr.splice(1,1,"classic");

// console.log(arr);

//strings

// let a= 'akash mahawar';
// let b= 'galich';
// // template literals to use vars in string , use backticks 
// let joinedstring = `${a} ${b}`
// console.log(joinedstring);
// console.log(`hello ${a}`);
// console.log(a.toUpperCase());
// console.log(a.search("akash"));
// //strings in js are immutable

// a[0]='l'
// console.log(a);
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
    
// }
// console.log(a.slice(2,5));
//q1


// let a= 'hay guys im there';


// let b= typeof(a);
// if (b=="string") {
//     console.log('the a is string');
// }
// else{
//     console.log('this is not a string');
// }

//q2
// let c= a.length;
// if (c==0) {
//     console.log('string is blank');
// } else {
//     console.log('string is not blank'); 
// }

//q3
// let arr = a.split(" ");
// console.log(arr);

//q4
// let n = 4;
// function akash(a , n) {
//     let x = a.slice(0,n);
//     console.log(x);
// }
// akash(a,7);

//q5
// function abb(a) {
//     for(let i =0; i<a.length;i++){
//         if (a[i]==" ") {
//             let m = a.slice(0,i+2);
//            return m;
//         }
//     }
// }
// let y = abb(a);
// console.log(y);

// let line = 'akash45@gmail.com';
// function hide(a) {
//     for (let i = 0; i < a.length; i++) {
//         if (a[i]=="@") {
//             let main;
//             main = a.slice(2,i);
//             a.replace(main,"******");
//             return 
//         }
//     }
// }

// let x = hide(line);
// console.log(x);

console.log('Hello world!l');

// let h1 = document.querySelector("h1")
 let hey = document.getElementById("hey");
console.log(hey);
hey.addEventListener("click", function(){
    h1.style.color = "red";
})
// make an program to calculate factorial 
let num = prompt("Enter a number to calculate factorial");
// let num= 0;
let result;
function fact(num) {
    if (num==0) {
        return 1;
    }
    else{
        num = num*fact(num-1);
        return num;
    }
}
result=fact(num);
// console.log(result);

alert(`The factorial of ${num} is ${result}`);
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let sum = parseInt(a) + parseInt(b);
//finally is used in function to execute funther if we used return in our function 
//since we know after return the further code doesn't execute but if we use finally in function then finally will execute ever after the return


if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("The data is unsupportive")
}

function main() {
    let x = 1;
    try {
        console.log("The sum is", sum*x);
        return true;
    } catch (error) {
        console.log("Error aa gaya bhai");
        return false;
    }
    finally{
        console.log("files are being closed and db is being closed");
    }
    
}
let c = main();
console.log(c);
// console.log(sum);

// alert(`The sum is ${sum}`);
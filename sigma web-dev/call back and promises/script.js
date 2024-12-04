// console.log("I'm log no. one");
// console.log("I'm log no. two");
// setTimeout(() => {
//     console.log("I'm log no. three");
// }, 0);

// //logic is simply compiler compile timed function in last whether time is seted to zero;
// console.log("I'm log no. four");
const callback = (arg) => {
    console.log(arg);
}//this is a function we used as a var in other function ;

//call back having the simple logic we make functions and we want them to call at specific order
//for example callback a function while our script is loaded otherwise compile other script elements before
const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Harry");
    document.head.append(sc);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

//PROMISES
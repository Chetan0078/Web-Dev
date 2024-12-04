// console.log("hello world!!");
// localStorage.setItem("name", "chetan");
// localStorage.setItem("age", 19);
// localStorage.setItem("subject", "Btech cse");


// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("age"));
// console.log(localStorage.getItem("subjects"));

// let arr = [1,2,3,4,5,6,7,8];
// //localStorage.setItem("array",arr);
// let arrStringify = JSON.stringify(arr);
// localStorage.setItem("array", arrStringify);

// console.log(JSON.parse(localStorage.getItem("array")));

// localStorage.removeItem("subjects");
function validateForm() {
    let name = document.forms["regform"]["name"]
    let email = document.forms["regform"]["email"]
    let password = document.forms["regform"]["password"]
    let confrimpassword = document.forms["regform"]["confrimpassword"]

    
    if (name.value == "") {
        window.alert("please inter your name");
        name.focus();
        return false;
    }
    if (email.value == "") {
        window.alert("Please enter your Email");
        email.focus();
        return false;
    }
    if (password.value == "") {
        window.alert("Please enter your Password");
        password.focus();
        return false;
    }
    if (password.value==confrimpassword.value) {
        if (register()) {
            window.alert("register is done successfully!");
            return true;
        }
        else {
            return false;
        }
    }
    else {
        window.alert("Password and confrim password should be same")
        confrimpassword.focus();
        return false;
    }
 
}
let users = [];
function register() {
    let name = document.forms["regform"]["name"].value;
    let email = document.forms["regform"]["email"].value;
    let password = document.forms["regform"]["password"].value;
    let confrimpassword = document.forms["regform"]["confrimpassword"].value;

    let newuser = {
        id:Number(new Date),
        "name":name,
        "email":email,
        "password":password,
        "confrimpassword":confrimpassword
    }

    let userexists = users.some(user => user.email === newuser.email);
    if (userexists) {
        return new Error({error: "user exists"})
    } else {
        users.push(newuser);
    }

    let userString  = JSON.stringify(users);
    localStorage.setItem("userList",userString);
}
let dark = document.getElementById("dark");
dark.addEventListener("click", function mode() {
    let body = document.querySelector("body");
    let h1 = document.querySelector("h1");
    let img = document.querySelector("img")
    h1.style.color = "gray"
    body.style.backgroundColor = "white";
    img.removeAttribute("src");
    img.setAttribute("src","https://cdn-icons-png.flaticon.com/128/5136/5136914.png")
})

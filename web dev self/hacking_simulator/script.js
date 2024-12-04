/*
Initializing Hacking...
Reading you Files...
Password files Detected...
Sending all passwords and personal files to server...
Cleaning up...

These all three dots should be blinking
*/
// function randPositionx() {
//     // let viewHeight = window.innerHeight;
//     let viewWidth = window.innerWidth;
//     let x = Math.floor(Math.random()*viewWidth)
//     // let y = Math.floor(Math.random()*viewHeight)
//     // box.style.left = x+"px"
//     // box.style.top = y+"px"
//     return x+"px";
// }
// function randPositiony() {
//     let viewHeight = window.innerHeight;
//     // let viewWidth = window.innerWidth;
//     // let x = Math.floor(Math.random()*viewWidth)
//     let y = Math.floor(Math.random()*viewHeight)
//     // box.style.left = x+"px"
//     // box.style.top = y+"px"
//     return y+"px";
// }


let box = document.querySelector(".box");
function randomTime() {
    let rand = Math.floor(Math.random() * 5000)
    return rand;
}

function randContent() {
    let rc = Math.random()*100
    if (rc>0 && rc<20) {
        return "Initializing Hacking";
    }
    else if (rc>20 && rc<40) {
        return "Reading you Files";
    }
    else if (rc>40 && rc<60) {
        return "Password files Detected";
    }
    else if (rc>60 && rc<80) {
        return "Sending all passwords and personal files to server";
    }
    else if (rc>80 && rc<100) {
        return "Cleaning up";
    }
}
setInterval(() => {
    let child = document.createElement("div");
    child.className = "child";
    child.innerHTML = randContent();
    // child.style.border = " 3px solid black";
    box.appendChild(child);

    console.log(randomTime());
}, randomTime());


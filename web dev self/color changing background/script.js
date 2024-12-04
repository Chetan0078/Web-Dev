let change = document.querySelector("button");
let body = document.querySelector("body")
let color;
console.log(change);
change.addEventListener("click", function () {
    body.style.backgroundColor = getRandomColor();
})
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
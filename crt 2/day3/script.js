// let para = document.querySelector(".para");
// console.log(para);
// para.addEventListener("click",function () {
//     para.style.fontSize = "20px";
//     para.style.color = "blue";
//     para.style.top = "60px"
// })
function changeCircleColor() {
    const circle = document.querySelector('.circle');
    circle.style.backgroundColor = getRandomColor();
}

function changeSquareShape() {
    const square = document.getElementById('square');
    const shapes = [
        { borderRadius: '0', transform: 'rotate(0deg)' }, 
        { borderRadius: '50%', transform: 'rotate(0deg)' }, 
        { borderRadius: '0', transform: 'rotate(45deg)' }, 
        { borderRadius: '50% 0', transform: 'rotate(0deg)' }, 
        { borderRadius: '0 50% 50% 50%', transform: 'rotate(0deg)' } 
    ];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    square.style.borderRadius = randomShape.borderRadius;
    square.style.transform = randomShape.transform;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

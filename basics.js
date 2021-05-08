const canvas = document.getElementById("canvas");

const context = canvas.getContext('2d');

context.fillStyle = '#272822'
context.fillRect(0, 0, 300, 300); // x, y, width, height


context.strokeStyle = 'rgb(122, 123, 117)'
let r = 150
let g = 150
let b = 117 

for (let i = 0; i != 250; i+=5){
    context.strokeRect(i, i, 50, 50);
    r-=1
    g-=2
    b-=3
    context.strokeStyle = `rgb(${r}, ${g}, ${b})`
}


const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

ctx.fillStyle = "#272822";
ctx.fillRect(0, 0, 300, 300);

ctx.strokeStyle = "rgb(122, 123, 117)";
let r = 150;
let g = 150;
let b = 117;

for (let i = 0; i != 250; i += 5) {
  ctx.strokeRect(i, i, 50, 50);
  r -= 1;
  g -= 2;
  b -= 3;
  ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
}

function drawTriangle(x1, y1, x2, y2, x3, y3, color = "#AE81DB") {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.lineTo(x1, y1);
  ctx.stroke();
}

let [x1, y1, x2, y2, x3, y3] = [290, 50, 290, 50, 290, 90];

console.log(x1, y1, x2, y2, x3, y3);

[r, g, b] = [200, 255, 255];

console.log(r, g, b);

for (let i = 0; i != 20; i++) {
  drawTriangle(x1, y1, x2, y2, x3, y3, `rgb(${r}, ${g}, ${b})`);
  x1 -= 5;
  y1 += 3;
  x2 -= 6;
  y2 += 3;
  x3 -= 7;
  y3 -= 1;
  r -= 1;
  g -= 2;
  b -= 3;
}

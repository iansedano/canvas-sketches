import { Draw } from './draw.js'

const canvas = document.getElementById("canvas");

const draw = new Draw(canvas)

draw.background('#FFDD9E')
let [ r, g, b ]= [150,150,117]

for (let i = 0; i != 250; i += 5) {
  draw.rectangle(i, i, 50, 50, `rgb(${r}, ${g}, ${b})`);
  r -= 1;
  g -= 2;
  b -= 3;
}

let [x1, y1, x2, y2, x3, y3] = [290, 50, 290, 50, 290, 90];

for (let i = 0; i != 20; i++) {
  draw.triangle(x1, y1, x2, y2, x3, y3, `rgb(${r}, ${g}, ${b})`);
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

[x1,y1] = [30,200];
let radius = 3;

for (let i = 0; i != 20; i++) {
    draw.circle(x1, y1, radius, `rgb(${r}, ${g}, ${b})`);
    x1 += 5;
    y1 += 3;
    radius += 1
    r -= 1;
    g -= 2;
    b -= 10;
  }
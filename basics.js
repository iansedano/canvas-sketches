import { Point } from './point.js'
import { Draw } from './draw.js'

const canvas = document.getElementById("canvas");

const draw = new Draw(canvas)

const p = new Point(1,2)

draw.background('#FFDD9E')
let [ r, g, b ]= [150,150,117]

for (let i = 0; i != 250; i += 5) {
  let p = new Point(i, i)
  draw.rectangle(p, 50, 50, `rgb(${r}, ${g}, ${b})`);
  r -= 1;
  g -= 2;
  b -= 3;
}

let [ p1, p2, p3 ] = [ new Point(290, 50), new Point(290, 50), new Point(290, 90)]

for (let i = 0; i != 20; i++) {
  draw.triangle( p1, p2, p3, `rgb(${r}, ${g}, ${b})`);
  p1.x -= 5;
  p1.y += 3;
  p2.x -= 6;
  p2.y += 3;
  p3.x -= 7;
  p3.y -= 1;
  r -= 1;
  g -= 2;
  b -= 3;
}

[p.x, p.y] = [30,200];
let radius = 3;

for (let i = 0; i != 20; i++) {
    draw.circle(p, radius, `rgb(${r}, ${g}, ${b})`);
    p.x += 5;
    p.y += 3;
    radius += 1
    r -= 1;
    g -= 2;
    b -= 10;
  }
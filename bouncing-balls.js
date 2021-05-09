import { Point } from './point.js'
import { Draw } from './draw.js'

const canvas = document.getElementById("canvas");

const draw = new Draw(canvas)

const p = new Point(draw.width / 2, draw.height /2)

draw.background("grey")

let [xChange, yChange] = [5, 3]
const r = 10
function animate() {
    draw.background("grey")

    if ( p.x + r >= 300 ||  p.x - r <= 0 ) {
        xChange *= -1
    }

    if ( p.y + r >= 300 ||  p.y - r <= 0 ) {
        yChange *= -1
    }

    p.x += xChange
    p.y += yChange

    draw.circle(p, r, "white")
    window.requestAnimationFrame(animate)
}

window.requestAnimationFrame(animate)
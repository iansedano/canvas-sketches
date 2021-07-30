import { Point } from './point.js'
import { Draw } from './draw.js'

const canvas = document.getElementById("canvas");

const draw = new Draw(canvas)

draw.background("grey")

let startPoint = new Point(50, 50)

function fractal(point, w, h) {
    if (w < 5 || h < 5) return
    draw.rectangle(point, w, h)
    startPoint.add(new Point(3,3))
    fractal(point, w*0.95, h*0.95)
}

fractal(startPoint, 200, 200)
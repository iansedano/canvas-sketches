import { Point } from './point.js'
import { Draw } from './draw.js'

const canvas = document.getElementById("canvas");

const draw = new Draw(canvas)

draw.background("grey")

let startPoint = new Point(500, 500)

function fractal(point, w, h) {
    if (w < 2 || h < 2) return
    draw.rectangle(point, w, h)
    
    const quarters = [
        new Point(point.x - w/4, point.y - h/4),
        new Point(point.x + w/4, point.y - h/4),
        new Point(point.x - w/4, point.y + h/4),
        new Point(point.x + w/4, point.y + h/4)
    ]
    
    quarters.forEach(p => fractal(p, w/2.5, h/2.5))

}

fractal(startPoint, 950, 950)
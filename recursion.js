import { Point } from './point.js'
import { Draw } from './draw.js'

const canvas = document.getElementById("canvas");

const draw = new Draw(canvas)

draw.background("grey")

const GOLDEN_RATIO = 1.61803398875
let angle = -Math.PI / 2
let length = draw.height/3
const startPoint = new Point(draw.width/2, draw.height-50)


function branch(point, length, angle) {
    if (length < 1) return
    const endBranch = new Point(
        point.x + Math.cos(angle) * length,
        point.y + Math.sin(angle) * length)
    draw.line(point, endBranch)
    
    branch(endBranch, length / GOLDEN_RATIO, angle + 0.5)
    branch(endBranch, length / GOLDEN_RATIO, angle - 0.2)

}

branch(startPoint, length, angle)
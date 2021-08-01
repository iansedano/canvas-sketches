import { Point } from './point.js'
import { Draw } from './draw.js'

const canvas = document.getElementById("canvas");

const draw = new Draw(canvas)

draw.background("grey")

const GOLDEN_RATIO = 1.61803398875
let angle = -Math.PI / 2
const startingLength = draw.height/1.5
const startPoint = new Point(draw.width/2, draw.height-50)
const startingThickness = 10
let maxBranchNum = 0

function branch(point, length, angle, thickness, branchNum = 1) {
    if (maxBranchNum < branchNum) maxBranchNum = branchNum
    if (length < 2) return
    
    let endBranch
    if (branchNum > 4) {
        endBranch = new Point(
            point.x + Math.cos(angle) * length,
            point.y + Math.sin(angle) * length)
    } else {
        endBranch = new Point(
            point.x + Math.cos(angle) * (length / 3),
            point.y + Math.sin(angle) * (length / 3))
    }
        
    draw.line(
        point,
        endBranch,
        branchNum > 9 ? "#3a5f0b" : undefined,
        thickness
    )
    
    const branchAngles = [
        Math.random() / 2,
        Math.random() / -2,
        0
    ]
    branchAngles.forEach(a => {
        branch(
            endBranch,
            length / GOLDEN_RATIO + (Math.random() - 0.5),
            angle + (a * (Math.random()*2)),
            thickness / GOLDEN_RATIO,
            branchNum + 1
        )
    })
}

branch(startPoint, startingLength, angle, startingThickness)
console.log(maxBranchNum)
import { Point } from './point.js'
import { Draw } from './draw.js'

const canvas = document.getElementById("canvas");

const draw = new Draw(canvas)

draw.background("grey")

const GOLDEN_RATIO = 1.61803398875
let angle = -Math.PI / 2
const startingLength = draw.height * 2
const startPoint = new Point(draw.width/2, draw.height-50)
const startingThickness = 10
let maxBranchNum = 0

function branch(point, length, angle, thickness, branchNum = 1) {
    if (maxBranchNum < branchNum) maxBranchNum = branchNum
    if (length < 2) return
    
    const branchLengthCoefficient = -8.5 * Math.log(branchNum + 1) + 20
    const clampedBranchLengthCoefficient = branchLengthCoefficient < 1 ? 1 : branchLengthCoefficient
    const branchLength = length * (1 / clampedBranchLengthCoefficient)
    
    const endBranch = new Point(
            point.x + Math.cos(angle) * branchLength,
            point.y + Math.sin(angle) * branchLength)
        
    draw.line(point, endBranch, undefined , thickness)
    
    const branchAngles = [
        0.3,
        -0.3
    ]
    branchAngles
        .map(a => {
            return a * ((Math.random() + 0.5) / 1.5)
        })
        .forEach(a => {
            branch(
                endBranch,
                length / GOLDEN_RATIO + (Math.random() - 0.5),
                angle + a,
                thickness / GOLDEN_RATIO,
                branchNum + 1
            )
        })
}

branch(startPoint, startingLength, angle, startingThickness)
console.log(maxBranchNum)
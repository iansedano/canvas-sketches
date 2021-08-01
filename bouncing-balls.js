import { Point } from './point.js'
import { Draw } from './draw.js'
import { BouncingBall } from './BouncingBall.js'

const canvas = document.getElementById("canvas");

const draw = new Draw(canvas)

const balls = []

for (let i = 0; i<10; i++){
    balls.push(
        new BouncingBall(
            new Point(Math.random() * draw.width, Math.random() * draw.height),
            new Point(Math.random() * 5, Math.random() * 5),
            Math.random() * 20,
            new Point(draw.width, draw.height)
        )
    )
}

function animate() {
    draw.background("grey")
    balls.forEach(b => {
        b.move()
        draw.circle(b.position, b.radius, "white")
    })
    window.requestAnimationFrame(animate)
}

window.requestAnimationFrame(animate)
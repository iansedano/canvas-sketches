import { Point } from './point.js'
import { Draw } from './draw.js'
import { BouncingBall } from './BouncingBall.js'

const canvas = document.getElementById("canvas");

const draw = new Draw(canvas)

const balls = []

const clamp = (value, min, max) => Math.min(Math.max(value, min),max)

for (let i = 0; i<100; i++){
    const radius = Math.random() * 20
    balls.push(
        new BouncingBall(
            new Point(
                clamp(Math.random() * draw.width, radius + 1, draw.width - radius - 1),
                clamp(Math.random() * draw.height, radius + 1, draw.height - radius - 1)
            ),
            new Point(Math.random() * 10 - 5, Math.random() * 10 - 5),
            radius,
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
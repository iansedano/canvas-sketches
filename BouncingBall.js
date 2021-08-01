export class BouncingBall {
    /**
     * @param {Point} position 
     * @param {Point} speed 
     * @param {number} radius 
     * @param {Point} canvasSize 
     */
    constructor(position, speed, radius, canvasSize) {
        this.position = position
        this.speed = speed
        this.radius = radius
        this.canvasSize = canvasSize
    }
    
    move(){
        if ( this.position.x + this.radius >= this.canvasSize.x ||
             this.position.x - this.radius <= 0 ) {
            this.speed.x *= -1
        }
    
        if ( this.position.y + this.radius >= this.canvasSize.y ||
             this.position.y - this.radius <= 0 ) {
            this.speed.y *= -1
        }
    
        this.position.x += this.speed.x
        this.position.y += this.speed.y
    }
    
}
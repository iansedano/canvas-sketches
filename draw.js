export class Draw {
    constructor(element) {
        this.canvas = element
        this.ctx = element.getContext("2d");
        this.width = element.width
        this.height = element.height
    }

    background(color) {
        this.ctx.fillStyle = color
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    rectangle(x, y, w, h, color) {
        this.ctx.strokeStyle = color;
        this.ctx.strokeRect(x, y, w, h);
    }

    triangle(x1, y1, x2, y2, x3, y3, color = "#AE81DB") {
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.lineTo(x3, y3);
        this.ctx.lineTo(x1, y1);
        this.ctx.stroke();
      }
    
    circle(x, y, r, color){
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, Math.PI * 2);
        this.ctx.stroke();
    }
}
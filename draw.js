export class Draw {
    constructor(element) {
        this.canvas = element
        this.ctx = element.getContext("2d");
        this.width = element.width
        this.height = element.height
    }

    background(color = '#ffffff') {
        this.ctx.fillStyle = color
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
    
    line(point1, point2, color = '#000000', thickness = 1) {
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = thickness
        this.ctx.beginPath();
        this.ctx.moveTo(point1.x, point1.y);
        this.ctx.lineTo(point2.x, point2.y);
        this.ctx.stroke();
    }
    
    rectangle(point, w, h, color = '#000000') {
        let xTopLeft = point.x - (w / 2)
        let yTopLeft = point.y - (h / 2)
        this.ctx.strokeStyle = color;
        this.ctx.strokeRect(xTopLeft, yTopLeft, w, h);
    }

    triangle(point1, point2, point3, color = '#000000') {
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(point1.x, point1.y);
        this.ctx.lineTo(point2.x, point2.y);
        this.ctx.lineTo(point3.x, point3.y);
        this.ctx.lineTo(point1.x, point1.y);
        this.ctx.stroke();
      }
    
    circle(point, r, color = '#000000'){
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(point.x, point.y, r, 0, Math.PI * 2);
        this.ctx.stroke();
    }
}
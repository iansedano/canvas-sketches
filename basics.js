const canvas = document.getElementById("canvas");

const context = canvas.getContext('2d');

context.fillStyle = 'rgb(200, 0, 0)' // can also be rgba
context.fillRect(10, 10, 280, 280); // x, y, width, height

context.clearRect(50, 50, 50, 50);

context.strokeRect(100, 100, 50, 50);
context.strokeRect(110, 110, 50, 50);
context.strokeRect(120, 120, 50, 50);
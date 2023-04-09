function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}

function mouseDragged(){
    // Your job:
    // When the user drags the mouse on the canvas, you should honor
    // the color, shape, and size of the paintbrush that are selected
    // in the right-hand panel. Replace the code below with something
    // smarter:
    
    noStroke('#shape');
    
    const shape = document.querySelector('#shape').value;

    const fillColor = document.querySelector('#color').value; 
    fill(fillColor);

    const size = document.querySelector('#size').value; 


    if (shape === 'circle') {
        circle(mouseX, mouseY, size);
    } else if (shape === 'square') {
        square(mouseX, mouseY, size);
    } else {
        triangle(
            mouseX, mouseY - size / 2, // first point
            mouseX - size / 2, mouseY + size / 2, // second point
            mouseX + size / 2, mouseY + size / 2,  // third point
        );
    }
}

diamond(
    mouseX, mouseY - size / 2, // first point
    mouseX - size / 2, mouseY + size / 2, // second point
    mouseX + size / 2, mouseY + size / 2,  // third point
)
/*
// Samples:

// https://p5js.org/reference/#/p5/circle
fill('pink');
circle(400, 400, 100);   // x, y, diameter

// https://p5js.org/reference/#/p5/square
fill('navy');
square(50, 300, 50);   // x (top left), y (top left), width

// https://p5js.org/reference/#/p5/triangle
fill('teal');
triangle(
    50, 50, // first point
    30, 80, // second point
    70, 80  // third point
)
*/
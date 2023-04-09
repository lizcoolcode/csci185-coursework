const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 6.0,
    color: 'hotpink'
};

const c2 = {
    x: 1200,
    y: 300,
    width: 100,
    speed: 4.5,
    color: 'blue'
};


// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move car1:
    c1.x += c1.speed;
    console.log(c1.x);

    // move car2:
    c2.x -= c2.speed;
    console.log(c2.x);

    if (c1.x > canvasWidth) {
        c1.x = 0;
    }

    if (c2.x < 0 - 200) {
        c2.x = canvasWidth + 200;
    }

    // redraw car1:
    drawCar(c1.x, c1.y, c1.width, c1.color);

    // redraw car1:
    drawCar(c2.x, c2.y, c2.width, c2.color);
    
    // draw the grid (optional -- feel free to remove this line):
    drawGrid(canvasWidth, canvasHeight);
}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}

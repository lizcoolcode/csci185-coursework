function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    makeCreature(200, 200);
    makeCreature(600, 400);

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(x, y) {
    fill('yellow');
    circle(x, y, 300);

    fill('black')
    ellipse(x - 50, y - 50, 30, 40);
    ellipse(x + 50, y - 50, 30, 40);
}

function mouseClicked() {
    makeCreature(mouseX, mouseY);
}

// function makeCreature1(x, y, size, color) {
//     fill(color);
//     circle(x, y, size);

//     fill('black')
//     ellipse(x - size/6, y - size/6, size/8, size/6);
//     ellipse(x + size/6, y - size/6, size/8, size/6);
// }


// function mouseDragged() {
//     makeCreature1(mouseX, mouseY, 100, 'pink');
// }
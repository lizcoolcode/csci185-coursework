function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    makeCreature(200, 200);
    makeCreature(500, 300);

    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(x, y) {

    fill('yellow')
    circle(x, y, 300)

    fill('red')
    ellipse(x - 50, y - 50, 30, 40)
    ellipse(x + 50, y - 50, 30, 40)
}

function mouseClicked() {
    makeCreature(mouseX, mouseY, 'yellow', 'red');
}


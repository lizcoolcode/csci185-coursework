function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    let y = 200;
    while (y <= 400) {
        circle(100, y, 50);
        y += 50;
    }

    drawGrid(canvasWidth, canvasHeight);
}

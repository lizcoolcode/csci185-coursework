function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    let counter = -5;
    while (counter < 20) {
        circle(100, 200 + counter * 50, 50);
        counter += 1;
    }

    drawGrid(canvasWidth, canvasHeight);
}

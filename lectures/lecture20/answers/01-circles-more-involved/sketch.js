function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    const colors = ['red', 'lightblue', 'pink', 'teal', 'lavender'];
    let y = 0;
    let i = 0;
    while (y <= canvasHeight) {
        fill(colors[i % colors.length]);
        circle(100, y, 50);
        y += 50;
        i += 1;
    }

    drawGrid(canvasWidth, canvasHeight);
}

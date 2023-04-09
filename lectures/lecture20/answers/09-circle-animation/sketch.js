const circleData = [
    {x: 500, y: 50, d: 100, speedX: 3, speedY: 3},
    {x: 300, y: 150, d: 50, speedX: 2, speedY: 0},
    {x: 400, y: 400, d: 25, speedX: 0, speedY: 1},
    {x: 40, y: 520, d: 80, speedX: 2, speedY: 0},
    {x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5},
    {x: 350, y: 350, d: 70, speedX: 1, speedY: 1}
];

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    fill('hotpink');
    let i = 0;
    while (i < circleData.length) {
        const item = circleData[i];
        circle(item.x, item.y, item.d);
        i++;
    }
    drawGrid(canvasWidth, canvasHeight);
}

function draw() {

    fill('hotpink');
    let i = 0;
    while (i < circleData.length) {
        const item = circleData[i];
        item.x += item.speedX;
        item.y += item.speedY;
        circle(item.x, item.y, item.d);
        i++;
    }
    drawGrid(canvasWidth, canvasHeight);

}

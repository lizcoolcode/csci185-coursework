let x = 100;
let y = 200;
let width = 50;
let fillColor = 'pink';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    fill(fillColor);
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    if (ev.code === 'ArrowUp') {
        y = y - 10;
        console.log('the user just pressed the up arrow');
    }

    if (ev.code === 'ArrowDown') {
        y = y + 10;
        console.log('the user just pressed the down arrow');
    }

    if (ev.code === 'ArrowRight') {
        x = x + 10;
        console.log('the user just pressed the right arrow');
    }

    if (ev.code === 'ArrowLeft') {
        x = x - 10;
        console.log('the user just pressed the left arrow');
    }
    
    if (ev.code === 'Equal') {
        width = width + 10;
    }

    if (ev.code === 'Minus') {
        width = width - 10;
    }

    else if (ev.code === 'KeyR') {
        let fillColor = 'red';
    }

    // redraw circle:
    clear();
    fill(fillColor);
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);

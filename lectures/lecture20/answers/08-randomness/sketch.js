const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min + 1) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(randomFloat(min, max));
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    frameRate(5); // change the frame rate to make things go faster/slower.
}


// anything that you want to animate goes in this function:  
function draw() {
    // clear();
    // pick a random number between 0 and 4:
    const rando = randomInt(0, colors.length - 1);
    fill(colors[rando]);

    // draw a random circle:
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    let diameter = randomFloat(25, 125);
    circle(x, y, diameter);

}


 
// other stuff you can do:
// draw a random square:
// square(x, y, size);

// // draw a random triangle:
// triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
// );

// draw a random line:
// let coefX = randomFloat(-3, 3);
// let coefY = randomFloat(-3, 3);
// line(x, y, x + size * coefX, y + size * coefY);


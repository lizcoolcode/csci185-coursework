function drawGrid(canvasWidth, canvasHeight, color='black') {
    textSize(10);
    textStyle(NORMAL);
    // strokeColor(color);
    
    stroke(color);
    fill(color);
    for (let x = 0; x < canvasWidth; x += 100) {
		for (let y = 0; y < canvasHeight; y += 100) {
			strokeWeight(1);
			line(x, 0, x, canvasHeight);
			line(0, y, canvasWidth, y);
            if ((x + 100) % 200 == 0 && (y + 100) % 200 == 0) {
			    strokeWeight(8);
                point(x, y);
                strokeWeight(0);
                text(`(${x}, ${y})`, x + 5, y + 20);
            }
            strokeWeight(1);
		}
	}
    stroke(0);
    fill(0);
}

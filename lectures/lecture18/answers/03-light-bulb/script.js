const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";
const elem = document.querySelector("#my_image");

const turnOn = (ev) => {
    if (elem.src === imgOn) {
        elem.src = imgOff;
    } else {
        elem.src = imgOn;
    }
};

// attach function to image's click event:
document.querySelector("#my_image").onclick = turnOn;
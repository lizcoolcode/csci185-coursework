//The data:
const person = { 
    name: "Jane", 
    pic: "images/patrick.png", 
    score: 300 
};

document.querySelector('main').insertAdjacentHTML(
    "beforeend", 
    `<img src="${person.pic}">
    <p>${person.name}'s high score is: ${person.score}</p>
    `
);


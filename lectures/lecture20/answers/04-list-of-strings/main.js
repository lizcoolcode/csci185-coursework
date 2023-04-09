const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe"
];


// use a while loop to output a message for each
// item in the array:
const outputElement = document.querySelector('#output');
counter = 0;
while (counter < names.length) {
    outputElement.insertAdjacentHTML('beforeend', `<p>Welcome, ${names[counter]}!</p>`);
    counter++;
}

function addNumbers() {
    // something to memorize: if you want to get what 
    // the user typed out of a form element, use ".value"
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    answer = num1 + num2;

    document.querySelector('#answer').innerHTML = answer;
}

function subtractNumbers() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    answer = num1 - num2;

    document.querySelector('#answer').innerHTML = answer;
}

function multiplyNumbers() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    answer = num1 * num2;

    document.querySelector('#answer').innerHTML = answer;
}

function divideNumbers() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    answer = num1 / num2;

    document.querySelector('#answer').innerHTML = answer;
}


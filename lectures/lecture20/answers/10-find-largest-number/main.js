const numbers = [65, 1800, 12, 20, 1963, 5000, 260, 0, 40, 953, 775, 67, 33];
let biggestNumberYet = 0
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
	if (biggestNumberYet < num) {
	    biggestNumberYet = num;
    }
}
console.log('The biggest number in the list is: ', biggestNumberYet)
document.querySelector('#answer').innerHTML = biggestNumberYet;
function evenOrOdd(num) {
    if (num % 2 == 0) {
    // if you divide by 2 and the remained is 0, it's even
        return 'even'; 
    } else { // otherwise, it's odd
        return 'odd';
	}
}

console.log('5:', evenOrOdd(5));
console.log('18:', evenOrOdd(18));
console.log('125:', evenOrOdd(125));
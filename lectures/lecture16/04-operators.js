////////////////////////////////////////////////
// Arithmetic Operators //
////////////////////////////////////////////////

// 1.1. Numbers
// initialize variables for demo:
a = 20;
b = 10;
c = 25;
console.log(a + b);    // addition
console.log(a - b);    // subtraction
console.log(a * b);    // multiplication
console.log(b / a);    // division (notice the result is a float)
console.log(c % a);    // modulus  25 / 20 = 1 with 5 left over (remained = 5)
console.log(a ** b);  // exponent
console.log(c ** (1/2));  // square root (notice the result is a float)



// 1.2. Strings
console.log('34' + '34');  // in the context of a string, the + sign concatenates two strings
console.log('34' - '34'); // does some implicit data type conversion
console.log('34' * 100);  // does some implicit data type conversion
console.log('34' * '34'); // does some implicit data type conversion


// 1.3. Booleans
// true implicitly converted to 1, false implicitly converted to 0.
// same as: 1 + 1 + 0 + 0 + 1
console.log(true + true + false + false + true);
// Uncomment the line below to see what happens:
// true / false  // you can't divide by zero!
console.log(true * false);
console.log(true * true);


// wierd: why is this 200?
console.log((('aa' === 'aa') + ('bb' === 'bb')) * 100);
// same as:
//  (true + true) * 100;
//  (1 + 1) * 100;
//  (2) * 100;
//  200;


console.log(('aa' === 'aa' + 'bb' === 'bb') * 100); 
console.log((('aa' === 'aa') + ('bb' === 'bb')) * 100);

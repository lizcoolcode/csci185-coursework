// Variable Demo 1: Variables store data
// copy this code and run it in your browser console:
let x = 1;
let y = 6;
let z = 4;
x = 2;
z = x + y;
x = 4;
z = z + x;

console.log(x);
console.log(y);
console.log(z);


// Variable Demo 2: JavaScript is case-sensitive
// copy this code and run it in your browser console:
let a = 3;
let A = 33;
console.log(a);
console.log(A);

// Variable Demo 3a: Scope Demo
// variable c is declared inside of a block w/let keyword, which
// means that it does not exist outside of the block;
a = 123;
let b = 456;
if (a !== b) {
    let c = 789;
    console.log('inside block:', c);
}
console.log(a);
console.log(b);
console.log('outside block:', c);

// Variable Demo 3b: Scope Demo
// variable c is declared inside of a block w/var keyword, which
// means that it *does exist outside of the block;
a = 123;
b = 456;
if (a !== b) {
    var c = 789;
    console.log('inside block:', c);
}
console.log(a);
console.log(b);
console.log('outside block:', c);
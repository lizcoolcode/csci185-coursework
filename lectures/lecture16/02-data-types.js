// Data Type Demo 1: use typeof to find out what type you have
// copy this code and run it in your browser console:
console.log(typeof 'hello world!');
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);    // this one's weird (longer discussion here (only if you're curious): https://stackoverflow.com/questions/18808226/why-is-typeof-null-object)
console.log(typeof undefined);
console.log(typeof 23.4);
console.log(typeof 4500);
console.log(typeof [1, 3, 4, 6]);
console.log(typeof { name: 'Lester', species: 'dog', age: 15});


// Data Type Demo 2: converting between types:
// String(), Number(), Boolean()
console.log(123, typeof 123, String(123), typeof String(123));
console.log('123', typeof '123', Number('123'), typeof Number('123'));
console.log('true', typeof 'true', Boolean('true'), typeof Boolean('true'));
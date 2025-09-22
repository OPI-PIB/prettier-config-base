// smoke-test.js

// Variables and constants
const greeting = 'Hello, world!';
let count = 0;

// Function declaration
function add(a, b) {
	return a + b;
}

// Arrow function
const multiply = (x, y) => {
	return x * y;
};

// Objects and arrays
const user = {
	name: 'Alice',
	age: 30,
	hobbies: ['reading', 'gaming', 'hiking']
};
const numbers = [1, 2, 3, 4, 5];

// Loops
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}

// Conditional
if (count < 10) {
	console.log('Count is less than 10');
} else {
	console.log('Count is 10 or more');
}

// Template literals and long string
const longMessage = `This is a very long message that is intended to exceed the print width of 120 characters. It should test whether Prettier wraps it correctly using tabs as indentation.`;

// Function call
console.log(add(5, 7));
console.log(multiply(3, 4));
console.log(greeting, user, longMessage);

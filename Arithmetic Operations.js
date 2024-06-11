//EX 1: Numbers

// Declaring and assigning the variables num1 and num2
let num1 = 20;
let num2 = 10;

// Performing arithmetic operations
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

// Printing the results of the arithmetic operations
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

// Ex 2: Boolean & Operators

// Comparison of two numbers
let x = 6;
let y = 15;

let isXGreaterThanY = x > y;               // Checks if x is greater than y
let isXLessThanOrEqualToY = x <= y;        // Checks if x is less than or equal to y
let isXEqualToY = x === y;                 // Checks if x is strictly equal to y
let isXNotEqualToY = x !== y;              // Checks if x is not equal to y

console.log(isXGreaterThanY);              // Outputs: false
console.log(isXLessThanOrEqualToY);        // Outputs: true
console.log(isXEqualToY);                  // Outputs: false
console.log(isXNotEqualToY);               // Outputs: true

// Logical operations
let a = true;
let b = false;

let resultOfAAndB = a && b;                // Logical AND operation
let resultOfAOrB = a || b;                 // Logical OR operation
let resultOfNotA = !a;                     // Logical NOT operation

console.log(resultOfAAndB);                // Outputs: false
console.log(resultOfAOrB);                 // Outputs: true
console.log(resultOfNotA);                 // Outputs: false

let p = 10;
console.log(p += 5); // p = p + 5; adds 5 to p, so p becomes 15. then prints 15.
console.log(p -= 3); // p = p - 3; subtracts 3 from p, so p becomes 12. then print 12.
console.log(p *= 2); // p = p * 2; multiplies p by 2, so p becomes 24. then print 24.
console.log(p /= 4); // p = p / 4; divides p by 4, so p becomes 6. then print 6.
console.log(p %= 3); // p = p % 3; calculates the remainder of p divided by 3, so p becomes 0. then prints 0.



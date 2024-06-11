//Using if-else Statements

let temperature = 20;

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

//Using switch Statements

switch (true) {
    case (temperature < 0):
        console.log("It's freezing!");
        break;
    case (temperature >= 0 && temperature <= 15):
        console.log("It's cold.");
        break;
    case (temperature >= 16 && temperature <= 25):
        console.log("It's mild.");
        break;
    default:
        console.log("It's warm.");
}

//Using if-else Statements

const number = 6;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

//Using switch statements 
switch (true) {
    case number % 2 === 0 && number % 3 === 0:
        console.log("Divisible by both.");
        break;
    case number % 2 === 0:
        console.log("Divisible by 2.");
        break;
    case number % 3 === 0:
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
        break;
}

//FOR LOOP

// 1. Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Print all even numbers between 1 and 20
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 3. Calculate the sum of all numbers from 1 to 100 and print the result
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// 4. Print each element of the array [1, 2, 3, 4, 5]
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 5. Find and print the largest number in the array [3, 7, 2, 5, 10, 6]
const numbers2 = [3, 7, 2, 5, 10, 6];
let max = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
  if (numbers2[i] > max) {
    max = numbers2[i];
  }
}
console.log(max);

//WHILE LOOP

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
let j = 1;
while (j <= 20) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}
let sum = 0;
let k = 1;
while (k <= 100) {
  sum += k;
  k++;
}
console.log("Sum of numbers from 1 to 100:", sum);
let l = 1;
while (l <= 50) {
  if (l % 5 === 0) {
    console.log(l);
  }
  l++;
}

//DO WHILE LOOP

// Task 1: Print numbers from 1 to 10
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);

// Task 2: Calculate the sum of all numbers from 1 to 100 and print the result
let sum = 0;
let num = 1;
do {
  sum += num;
  num++;
} while (num <= 100);
console.log("Sum of numbers from 1 to 100:", sum);

// Task 3: Prompt the user to enter a number greater than 10
let userInput;
do {
  userInput = prompt("Enter a number greater than 10:");
} while (userInput <= 10 || isNaN(userInput));
console.log("Valid number entered:", userInput);

// Task 4: Create a simple guessing game
const correctNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
do {
  userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
} while (userGuess !== correctNumber);
console.log("You guessed the correct number:", correctNumber);




// Monday, Dec 12, 2022
// React 4.3 -- Lab
// J.T.W.

//////////////////////////////////////////
// Arrays, Loops, and Conditional Reps
//////////////////////////////////////////

//////////////////////
// Part I: HTML & CSS
//////////////////////

// Rank your comfort: 5

///////////////////////////////
// Part II: JavaScript Reps
///////////////////////////////

// Write a for loop that will log the numbers 1 through 20.
function logTheNums(upperBound) {
  for (let i = 1; i <= upperBound; i++) {
    console.log(i);
  }
}

// logTheNums(20);

// Write a for loop that will log only the even numbers in 0 through 200.
function logTheEvens(upperBound) {
  for (let i = 0; i <= upperBound; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// logTheEvens(200);

//////////////
// Fizz Buzz
// 1. Write a javascript application that logs all numbers from 1 - 100.
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

function fizzBuzz(lowerBound, upperBound) {
  for (let i = lowerBound; i <= upperBound; i++) {
    if (i % 15 === 0) {
      console.log(i, "FizzBuzz");
    } else if (i % 3 === 0) {
      console.log(i, "Fizz");
    } else if (i % 5 === 0) {
      console.log(i, "Buzz");
    }
  }
}

// fizzBuzz(1, 100);

/////////////////////
// Wild Wild Life
// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2]++;

// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";

// 3. Give D'Art a second hometown by adding "Hawkins"
dart[4] = "Hawkins";

// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy[0] = "Gameboy";

/////////////////////////////
// Yell at the Ninja Turtles

// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// 2. Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase() on each of them and print out the result.
// Syntax: for (variable of iterable) statement

for (element of ninjaTurtles) {
  element = element.toUpperCase();
  console.log(element);
}

// REMEMBER! -- .toUpperCase() is a method of the String.prototype, not the Array.prototype
// this method is not defined on an array, it's defined on string objects

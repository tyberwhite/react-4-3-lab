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

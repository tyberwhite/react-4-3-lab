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

/////////////////////////
// Methods, Revisited

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

// Console log: the index of Titanic
console.log(favMovies.findIndex((element) => element === "Titanic"));
console.log(favMovies.indexOf("Titanic"));

// 1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort();

// This method sorted the elements of the array in place and returned the reference to the same array.

// 2. Use the method pop  --  Removes the last element from an array
favMovies.pop();

// 3. push "Guardians of the Galaxy"  --  Adds element(s) to the end of an array
favMovies.push("Guardians of the Galaxy");

// 4. Reverse the array  --  Reverses an array in place
favMovies.reverse();

// 5. Use the shift method  --  Removes the first element from an array
favMovies.shift();

// 6. unshift - What does it return? --  It returns the new length of the array after adding element(s) to the beginning of the array
favMovies.unshift("Forest Gump");

// 7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// Yes, the splice method alters the array contents
// Syntax: splice(start, deleteCount, item1)

favMovies.splice(favMovies.indexOf("Django Unchained"), 1, "Avatar");

// 8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// Syntax: slice(start, end) -- end not included

// adding another element for simplicity, so length = 20
favMovies.push("Top Gun");
console.log(favMovies.length);

// 9. Store the value of your slice in a variable, console.log it - Thought question: what is going on here?
let lastHalf = favMovies.slice(favMovies.length / 2, favMovies.length);
console.log(lastHalf);

// 10. console.log your final results
console.log(favMovies);

// 11. After running the above tasks, console.log the index of "Fast and Furious" - We removed it from the array, what value do we get when we look for the index of something that is not in the array?
console.log(favMovies.indexOf("Fast and the Furious"));

// We get the value -1 if the element is not in the array

// 12. Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?

// We were able to change the array because the const declaration prevents us from reassigning the variable, but it does not prevent us from modifying the contents of the array.

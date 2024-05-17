"use strict";
//Problems from https://edabit.com/challenges/javascript

// TODO
// ************************** Question 01 *********************************
// Question: Write a function redundant that takes in a string str and returns a function that returns str.
//ANSWER

let x = function (str) {
  let newfunc = () => {
    return `Returning String: ${str}`;
  };
  return newfunc();
};

let testStr = "This is a Test String";
//console.log(x(testStr));

// ************************** Question 02 *********************************
//Use a regular expression to test for an empty string.

let emptyStr = (str) => {
  return str.length == 0 ? true : false;
};

// console.log(emptyStr("Not Empty"))
// console.log(emptyStr(""))

// ************************** Question 03 *********************************
/*
In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die.
 If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

Can you reach your friend's tile number in the next roll?
 Create a function that takes your position a and 
 your friend's position b and returns a boolean representation of whether
  it's possible to earn a bonus on any die roll.
*/

function check(x, y) {
  return y - x <= 6 && y - x >= 1 ? true : false;
}

//console.log(check(4, 9));

// ************************** Question 04 *********************************

/*
Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
*/

// Option 01
function digits(num) {
  return String(num).length;
}
//Option 02
function digits2(num) {
  // let check = num,
  let count = 0;
  while (num >= 1) {
    num = num / 10;
    count++;
  }
  return count;
}
// console.log(digits(458754));
// console.log(digits2(458754));

// ************************** Question 05 *********************************

/* The right shift operation is similar to floor division by powers of two.

Sample calculation using the right shift operator ( >> ):

80 >> 3 = floor(80/2^3) = floor(80/8) = 10
-24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
-5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers. 
*/

// Answer

function shiftOp(x, y) {
  return Math.floor(x / 2 ** y);
}
// console.log(shiftOp(80,3))
// console.log(shiftOp(-24,2))
// console.log(shiftOp(-5,1))

// ************************** Question 06 *********************************

function numberTetrahedral(n) {
  return (n * (n + 1) * (n + 2)) / 6;
}

// console.log(numberTetrahedral(5))

// ************************** Question 07 *********************************
/* 
Write a function which increments a string to create a new string.

If the string ends with a number, the number should be incremented by 1.
If the string doesn't end with a number, 1 should be added to the new string.
If the number has leading zeros, the amount of digits should be considered.
Examples
incrementString("foo") ➞ "foo1"

incrementString("foobar0009") ➞ "foobar0010"

incrementString("foo099") ➞ "foo100"
 */

// console.log(Number('4')) //return Number
// console.log(Number('a')) // return NaN

// let xz = Number("d") == NaN
// console.log(xz)

function incrementString(str) {
  let i = str.length - 1;

  // Find the start of the trailing number
  while (i >= 0 && !isNaN(str[i]) && str[i] !== ' ') {
    i--;
  }

  // Separate the non-numeric and numeric parts
  const text = str.slice(0, i + 1);
  const number = str.slice(i + 1);

  // If there is no trailing number, just append '1'
  if (number === "") {
    return str + '1';
  }

  // Increment the number part
  const incrementedNumber = (parseInt(number, 10) + 1).toString();

  // Preserve the leading zeros
  const leadingZeros = number.length - incrementedNumber.length;
  const incrementedWithLeadingZeros = '0'.repeat(Math.max(0, leadingZeros)) + incrementedNumber;

  // Combine and return the result
  return text + incrementedWithLeadingZeros;
}
console.log(incrementString("foo"));         // "foo1"
console.log(incrementString("foobar0009"));  // "foobar0010"

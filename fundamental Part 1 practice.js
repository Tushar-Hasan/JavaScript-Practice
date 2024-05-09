// let js = "amazing";
// if (js === "amazing") alert("Js is Fun!");
// console.log(48 + 28 + 36);

// let firstName = "Kahbib";
// let lastName = "Islam";

// console.log(firstName, lastName); // space
// console.log(lastName);

// let $num = 5;
// console.log($num);

// //let 3person = 3;
// let PI = 3.1416;
// const CHECK = 333333;
// let CHEK = 3334;
// const checkx = 545;
// console.log(typeof NuN);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(2 ** 5);
// console.log(now - 1991 > now - 2955);
//////////////////////////////////////////////////////////////////////
// Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height ** 2 = mass / (height *height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI'
containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK

///

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / (johnHeight * johnHeight);

console.log("Marks BMI: ", markBMI);
console.log("Johns' BMI: ", johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

////////////////////////////////////
const currentYear = 2024;
let birthYear = 1980;
let age = `Age is ${currentYear - birthYear} year.`;
console.log(age);
console.log(`This is to demonstrate multiple line comment.
This is a new line.
Current year is ${currentYear}.
`);
console.log(
  "another way of multiple line.\n\
THis is a new line \n\
This is another new line created"
);

//////////////////////////////////////////////////////////////////////////////////////////
*/

// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template string to include the BMI values is the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
HINT: Use an if/else statement
GOOD LUCK

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than Johns (${johnBMI}).`);
} else {
  console.log(`Mark's BMI (${markBMI}) is less than Johns (${johnBMI}).`);
}

*/

let check = "18";
console.log(typeof check, typeof Number(check));
let check2 = 777;
console.log(typeof check2, typeof String(check2));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean([]));
console.log(Boolean(""));

console.log("11" == 11);
console.log("11" === 11);
console.log(11 == "11");
console.log(11 === "11");

//##################################################################
// Coding Challenge #3
/*
I
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times.
 The winner with the highest average score wins the a trophy!
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the
console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule,
 a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.
  HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks
4. BONUS 2: Minimum score also applies to a draw!
 So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. 
 Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK


let dolphinsAvg = (96 + 108 + 89) / 3;
let koalasAvg = (109 + 95 + 123) / 3;

if (dolphinsAvg > koalasAvg) {
  console.log("Dolphins won!");
} else if (koalasAvg > dolphinsAvg) {
  console.log("Koala won!");
} else {
  console.log("Draw");
}

console.log(`100 rule result`);
let difference = dolphinsAvg - koalasAvg;
console.log(difference);
if (dolphinsAvg > koalasAvg && difference >= 100 && dolphinsAvg >= 100) {
  console.log("Dolphins won!");
} else if (dolphinsAvg < koalasAvg && difference <= -100 && koalasAvg >= 100) {
  console.log("Koala won!");
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100) {
  console.log("Draw");
} else {
  console.log(`No One Wins!`);
}
*/
// let day;
// switch (day) {
//   case "monday":
//     console.log("Sunny ");
//     break;
//   case "tuesday":
//     console.log("Rainy");
//     break;
//   case "wednesday":
//     console.log("Partly Sunny");
//   case "thursday":
//     console.log("Thunderstorm ");
//     break;
//   case "friday":
//     console.log("Warm");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Holiday");
//     break;
//   default:
//     console.log("Not valid");
// }
// let age = 18;
// age >= 18 ? console.log("Can drive ") : console.log("can't drive");

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value.
 Create a variable called 'tip' for this.
  It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
 Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


let bill = 15;
console.log(bill);

bill >= 50 && bill <= 300
  ? console.log(
      `The bill was ${bill}, the tip was ${bill * 0.15}, and the total value ${
        bill + bill * 0.15
      }`
    )
  : console.log(
      `The bill was ${bill}, the tip was ${bill * 0.2}, and the total value ${
        bill + bill * 0.2
      }`
    );
    */

"use strict";
///////////////////////////////////////
// Coding Challenge #1

// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(2, 3));
// let sum2 = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(sum2(22, 3));
// let sum3 = (sum1, sum2) => sum1 + sum2;
// console.log(sum3(54, 6));

//Array

// let someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let length = someNumbers.length;
// let newL = someNumbers.push(10);
// console.log(newL);
// console.log(someNumbers);
// someNumbers.unshift(0);
// console.log(length);
// console.log(someNumbers);
// let newL2 = someNumbers.push(11, 12);
// console.log(newL2);
// console.log(someNumbers);
// someNumbers.unshift(-1, -2);
// console.log(someNumbers.length);
// console.log(someNumbers);
// console.log('added')

// someNumbers.pop();
// console.log(someNumbers.length);
// console.log(someNumbers);
// someNumbers.shift();
// console.log(someNumbers.length);
// console.log(someNumbers);

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), 
and then logs the winner to the console, together with the victory points, according to the rule above.
 Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > 2 * avgKoalas) {
    console.log(`Dolphins win(${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win(${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(
      `No One wins. Koala: ${avgKoalas} and dolphins: ${avgDolphins}`
    );
  }
}
checkWinner(avgDolphins, avgKoalas);
//////////////////////////////////

// Coding Challenge #2

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];
// function calTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else return bill * 0.2;
// }
// for (let i = 0; i < bills.length; i++) {
//   let bill = bills[i];
//   // console.log(bill);

//   let tip = calTip(bill);
//   // console.log(tip);
//   console.log(`for ${bill} tip is ${tip}`);
//   tips.push(tip);
//   totals.push(bill + tip);
// }
// console.log("tips", tips);
// console.log("Totals", totals);

//////////////////////////////////Objects ///////////////////////////////

// let car = {
//   brandName: "Toyota",
//   modelYear: 2019,
//   check: [1, 2, 3, 4],
//   currentPrice: 524,
// };
// console.log(car);
// console.log(car.brandName);
// console.log(car["modelYear"]);
// console.log(car["current" + "Price"]);

// const check = prompt(
//   "Input your choice from cars' brandName,modelYear,check,currentPrice"
// );
// if (car[check]) {
//   console.log(car[check]);
// } else {
//   console.log("Wrong request");
// }

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1988,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriverLicense: false,
//   calcAge: function () {
//     return 2037 - this.birthYear;
//   },

//   info: function () {
//     return `${this.firstName} is a ${this.calcAge()} years old ${
//       jonas.job
//     }.And he has ${this.hasDriverLicense ? "a" : "no"} driver license.`;
//   },
// };

// ///Challange

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends.His best firend is ${jonas.friends[0]}`
// );

// // console.log(jonas.calcAge(1998));
// // console.log(jonas['calcAge'](1992));

// console.log(jonas.calcAge());
// console.log(jonas.info());

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// let mark = {
//   fullName: "Mark Mller",
//   mass: 78,
//   height: 1.69,
//   calBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// let john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// Note : This function has to be called as the bmi property is initilized in calBMIfunction.
//So,without calling this persopn bmi property won;t be created

// mark.calBMI();
// john.calBMI();

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.calBMI()}) is bigger than ${john.fullName}'s BMI (${john.bmi}).`);
// }
// else {
//   console.log(`${john.fullName}'s BMI (${john.calBMI()}) is bigger than ${mark.fullName}'s BMI (${john.bmi}).`);
// }
// console.log(mark.bmi);

//// For Loop
// for (let i = 1; i <= 10; i++) {
//   console.log(`Counting : ${i}`);
// }

// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i]);
//   console.log(typeof jonas[i]);
//   types.push(typeof(jonas[i]));
// }
// console.log(types)

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// for (let i = 1; i < 30; i++) {
//   if (i === 25) break;
// }

// for (let i = 1, count = 0; i < 50; i++) {
//   if (!(i % 5 === 0 && i % 2 === 0)) {
//     //console.log(i);
//     continue;
//   }
//   count += 1;
//   console.log(`found it! ${count}`);
//   console.log(i);
// }

////////backwards loops
// for (let i = 50; i > 0 ; i --){
//   console.log(`Going backward ${i}`)
// }

///////While loops
// let number = 4;
// let result = 1;
// while (number >= 1) {
//   result = result * number;
//   number--;
// }
// console.log(result);

// console.log(Math.trunc(Math.random()*6))

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];
function calcTip(bill) {
  let tip;
  bill >= 50 && bill <= 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);
  return tip;
}
for (let i = 0, tip; i < bills.length; i++) {
  let bill = bills[i];
  tip = calcTip(bill);
  console.log(`Bill: ${bill} and tips:${tip}`);
  tips.push(tip);
  totals.push(bill + tip);
}
console.log(tips);
console.log(totals);

// Bonus 4 challange
console.log(`Bonus 4 Challenge`);

function calcAverage(array) {
  let sum = 0;
  let lengthArr = array.length;
  for (let i = 0; i < lengthArr; i++) {
    sum += array[i];
  }
  let average = sum / lengthArr;
  return average;
}
console.log(`Average total: ${calcAverage(totals)}`);

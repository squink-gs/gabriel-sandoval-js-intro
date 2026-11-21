// //----------------------------------
// // LESSON 2 LOOPS AND ARRAYS
// //----------------------------------

// // # JavaScript Loops and Arrays
// // This is the coding assignment for the second week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
// //  - Simplify Repetitive Tasks with Loops
// //  - Working with ‘for’ Loops
// //  - Understanding Arrays

// // In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the Welcome to week 2 information to the right, you'll need to use console logs for all the questions to check your code output. Using a function in a console.log is very similar to how you were using them with variables last week. To invoke/call the function use the syntax:

// // console.log("Q#: ", functionName(anyInput))

// // Note: If a question says ‘return’, your function should use return. If it says ‘print’, use console.log.” Test your functions with several different inputs to make sure they work in all cases.


// // ---------- QUESTION 1 ----------
// // Write a function called 'repeat' that takes 1 integer parameter and, using a for or while loop, prints out the string "Hello World!" to the console the same number of times as the parameter. Place your console.log inside the function so the message prints during each loop iteration. NOTE: for this question, since your console log should be inside your function, you only need to call/invoke the function after you write it rather than call/invoke it inside of a console.log.

// // EXAMPLE "LOG":
// //  repeat(3);
// // EXAMPLE OUTPUT:
// //  Hello World!
// //  Hello World!
// //  Hello World!


// // PUT YOUR CODE HERE

// function repeat(iterations) {
//     for (let i = 0; i < iterations; i++) {
//         console.log("Q1: Hello World!")
//     }
// }
// repeat(3);

// // ---------- QUESTION 2 ----------
// // Write a function called 'pyramidCounting' that takes 1 integer parameter and returns the sum of all of the numbers between 0 and the parameter. Your loop should include the parameter value itself (e.g., if the input is 4, include 4 in the sum.

// // EXAMPLE LOG:
// //  console.log("Q2: ", pyramidCounting(4));
// // EXAMPLE OUTPUT:
// //  Q2: 10
// // The mathematical explanation of this is 0+1+2+3+4 = 10.

// // PUT YOUR CODE HERE

// function pyramidCounting(integer) {
//     let sum = 0;
//     for (let i = 0; i <= integer; i++) {
//        sum += i;
//     }
//     return sum; 
// }
// console.log("Q2: " + pyramidCounting(4));

// // ---------- QUESTION 3 ----------
// // Write a function called 'noVowels' that take a string parameter and removes vowels from that string using a loop. Assume the input will be lowercase, but bonus if you handle uppercase too.

// // EXAMPLE LOG:
// //  console.log("Q3: ", noVowels("adventurous"));
// // EXAMPLE OUTPUT:
// //  Q3: dvntrs

// // PUT YOUR CODE HERE

// // ------------ QUESTIONS ------------
// // 1. How do I indentify vowels?
//     // Use an array to store the vowels, then check if the vowels are in that array
// // 2. How do I remove the vowels only?
//     // If letter in array -> continue, otherwise append somewhere

// // creating an array to store vowels:
// const vowels = ["a", "e", "i", "o", "u"];

// // creating somewhere to store consonants:
// function noVowels(string) {
//     let devoweled = "";
//     // sanitizing our input:
//     const lowerString = string.toLowerCase();

//     // iterate through the string:
//     for (let i = 0; i < lowerString.length; i++) {
//         // check if the current letter is a vowel:
//         if ( vowels.includes(lowerString.charAt(i)) ) {
//             continue
//         } else {
//             devoweled += lowerString.charAt(i);
//         }
//     }
//     return devoweled;
// }
// console.log("Q3: " + noVowels("Gabriel")); // expected: gbrl


// // ---------- QUESTION 4 ----------
// // Write a function called 'vowelCount' that takes 1 string parameter and returns the number of vowels in that string. Your function should count both uppercase and lowercase vowels.

// // EXAMPLE LOG:
// //  console.log("Q4: ", vowelCount('I love to code.'));
// // EXAMPLE OUTPUT:
// //  Q4: 6

// // PUT YOUR CODE HERE


// function vowelCount(string) {
//     let count = 0;
//     const lowerString = string.toLowerCase(); 

//     for (let i = 0; i < lowerString.length; i++) {
//         if ( vowels.includes(lowerString.charAt(i)) ) {
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log("Q4: " + vowelCount("I love to code."));

// // ---------- QUESTION 5 ----------
// // Write a function called 'numOfOdds' that takes 1 integer parameter and returns the number of odd numbers between 0 and that number, including the number itself if it's odd. (Hint: Use the modulo operator)

// // EXAMPLE LOG:
// //  console.log("Q5: ", numOfOdds(15));
// // EXAMPLE OUTPUT:
// //  Q5: 8
// // The numbers being counted are 1, 3, 5, 7, 9, 11, 13, 15 - that's 8 odd numbers, including 15 itself.

// // PUT YOUR CODE HERE


// function numOfOdds(number) {
//     let oddAmount = 0;
//     for (let i = 0; i <= number; i++) {
//         if (i % 2 == 1) {
//             oddAmount++;
//         } 
//     }
//     return oddAmount;
// }
// console.log("Q5: " + numOfOdds(15));

// // ---------- QUESTION 6 ----------
// // Create two variables named 'empty' and 'full'. Assign an empty array to the 'empty' variable and any array of strings or numbers to the 'full' variable. Write a function called 'arrayChecker' that returns true if the array passed as a parameter is empty and false if not. Check both the 'empty' and 'full' variables to make sure they are returning the expected values. Return the boolean values true or false (not strings)

// // EXAMPLE LOGS:
// //  console.log("Q6 empty: ", arrayChecker(empty));
// //  console.log("Q6 not empty: ", arrayChecker(full));
// // EXAMPLE OUTPUTS:
// //  Q6 empty: true
// //  Q6 not empty: false

// // PUT YOUR CODE HERE

// const empty = []; 
// const full = ["not", "an", "empty", "array"];

// function arrayChecker(array) {
//     let isEmpty = false;
//     // check if array is empty:
//     if (array.length == 0) {
//         isEmpty = true;
//     } else {
//         isEmpty = false;
//     }
//     return isEmpty;
// }

// console.log("Q6: " + arrayChecker(empty));
// console.log("Q6: " + arrayChecker(full));
// console.log(full);

// // ---------- QUESTION 7 ----------
// // Write a function called 'getElementAt' that takes an array parameter and an integer parameter. The function should return the element in the array at the given number index or 'null' if it doesn't exist. If the index is out of range, return null (not undefined). Use your 'full' variable from Question 6 to test.

// // EXAMPLE LOGS:
// //  console.log("Q7: ", getElementAt(full, 2));
// //  console.log("Q7: ", getElementAt(full, 7));

// // EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
// //  Q7: code
// //  Q7: null

// // PUT YOUR CODE HERE

// function getElementAt(array, index) {
//     let arrayCopy = array.slice(0, array.length); // making copy in case the function is called with index oob
//     if (index > arrayCopy.length - 1) {
//         arrayCopy[index] = null;
//     }
//     return arrayCopy[index];
// }
// console.log("Q7: " + getElementAt(full, 0));
// console.log("Q7: " + getElementAt(full, 7));
// // console.log(full);

// // ---------- QUESTION 8 ----------
// // Write a function called 'insertInArray' that takes an array parameter, makes a NEW array with the value '0' inserted at the second position in the NEW array. The function should return the NEW array. Do not modify the original array — see slice hint. Use your 'full' variable from Question 6 to test. NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array. Hint: To make a copy you can use the slice() method as in this example:
// // let newArray = originalArray.slice()
// // LEARNING MOMENT: Also console log the variable 'full' to compare the new array to the original.

// // EXAMPLE LOG:
// //  console.log("Q8: ", insertInArray(full));
// //  console.log("original array: ", full);

// // EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
// //  Q8: ["dream", 0, 19, "code", 24, 180]
// //  original array: ["dream", 19, "code", 24, 180]

// // PUT YOUR CODE HERE

// // creating a way to combine all out subarrays:
// function insertInArray(array) {
//     const newArray = [];
//     // storing tail end of our input array 
//     const tailEnd = array.slice(1, array.length);
//     // appending the first element + adding the '0':
//     newArray.push(array[0], 0);
//     // iterating through the tail end to add elements one by one:
//     for (let i = 0; i < tailEnd.length; i++) {
//         newArray.push(tailEnd[i]);
//     }
//     return newArray;
// }
// console.log("Q8 (orginal array)", full)
// console.log("Q8 (new array): ", insertInArray(full))


// // ---------- QUESTION 9 ----------
// // Write a function called 'compareArrays' that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not.  The purpose of this function should be to look at each element of the two arrays and compare them, returning false when they either hit two items that don't match, or returning false if the two arrays themselves are different lengths. You can test this with the 'empty' and 'full' variables from Question 6, and/or you can create a variable called 'compare' and assign it an array identical to 'full' to compare those. To further test your function's accuracy, create a new variable called 'part' that is a partial copy of the 'full' variable and test that as well. Hint: First check whether the arrays are the same length. If not, return false immediately.

// // REMEMBER: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

// // EXAMPLE LOG:
// //  console.log("Q9 same: ", compareArrays(full, compare));
// // EXAMPLE OUTPUT: (if both arrays assigned to variable 'full' and 'compare' are ["dream", 19, "code", 24])
// //  Q9 same: true

// // EXAMPLE LOG:
// //  console.log("Q9 different: ", compareArrays(full, empty));
// // EXAMPLE OUTPUT: (if using variables from Question 6)
// //  Q9 different: false

// // EXAMPLE LOG:
// //  console.log("Q9 partial: ", compareArrays(full, part));
// // EXAMPLE OUTPUT: (if 'full' variable is ["dream", 19, "code", 24] and if 'part' variable is ["dream", 19, "code"])
// //  Q9 partial: false

// // PUT YOUR CODE HERE


// /*
// 1. Check if the arrays have the same length.
// 2. Comapre the arrays element wise using .every()
// */

// // simple test case:
// const testArray1 = ["1", "2", "3"];
// const testArray2 = ["1", "2", "3"];


// // full = ["not", "an", "empty", "array"];
// const compare = full;
// console.log("compare: ", compare);
// const part = full.slice(0, 2) // ["not", "an"]
// console.log("part: ", part);
// let isEqual = false;

// function compareArrays(array1, array2) {
//     if (array1.length != array2.length) {
//         isEqual = false;
//     } else {
//         isEqual = array1.every((element, index) => element === array2[index]);
//     }
//     return isEqual;
// }

// // console.log("Q9: " + compareArrays(testArray1, testArray2));
// console.log("Q9 (same): " + compareArrays(full, compare));
// console.log("Q9 (different): " + compareArrays(full, empty));
// console.log("Q9 (partial): " + compareArrays(full, part));


// // ---------- QUESTION 10 ----------
// // Create a variable called 'numbers' and assign it an array with at least 3 numbers as elements (example: [10, 3, 4]). Write a function called 'calculateTotal' that takes one array parameter and loops through the array in order to return the sum of all the array elements. Hint: Start your total at 0 before looping

// // EXAMPLE LOG:
// //  console.log("Q10: ", calculateTotal(numbers));

// // EXAMPLE OUTPUT: (if the array assigned to variable 'numbers' is [3, 4, 2 ,8])
// //  Q10: 17

// // PUT YOUR CODE HERE

// const numbers =  [10, 8, 2026];

// function calculateTotal(array) {
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         total += array[i];
//     }
//     return total;
// }
// console.log("Q10: ", calculateTotal(numbers));

// // ---------- QUESTION 11 ----------
// // Write two functions called 'findEvens' and 'findOdds' that each take one array parameter and each function returns a NEW Array of only the even or odd numbers as indicated. NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array. To make a copy you can use the slice() method as in this example:
// // let newArray = originalArray.slice()

// // EXAMPLE LOG3):
// //  console.log("Q11 evens: ", findEvens([10,2,3,19,7,6,93]));
// //  console.log("Q11 odds: ", findOdds([10,2,3,19,7,6,93]));

// // EXAMPLE OUTPUT:
// //  Q11 evens: [10,2,6]
// //  Q11 odds: [3,19,7,93]

// // PUT YOUR CODE HERE

// const numbersArray = [10,2,3,19,7,6,93];

// function findEvens(array) {
//     let evens = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             evens.push(array[i]);
//         }
//     }
//     return evens;
// }

// function findOdds(array) {
//     let odds = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 1) {
//             odds.push(array[i]);
//         }
//     }
//     return odds;
// }

// console.log("Q11 (evens): ", findEvens(numbersArray));
// console.log("Q11 (odds): ", findOdds(numbersArray));


// // ---------- QUESTION 12 ----------
// // Write a function called 'makeSquares' that takes one array parameter and returns a NEW Array with the squared values of each of the numbers. NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array. To make a copy you can use the slice() method as in this example:
// // let newArray = originalArray.slice()

// // EXAMPLE LOG:
// //  console.log("Q12: ", makeSquares([2,5,8]));
// // EXAMPLE OUTPUT:
// //  Q12: [4,25,64]

// // PUT YOUR CODE HERE

// const example = [1, 2, 3];

// function makeSquares(array) {
//     let squared = [];
//     for (let i = 0; i < array.length; i++) {
//         const sqr = (array[i]) ** 2;
//         squared.push(sqr);
//     }
//     return squared;
// }
// console.log("Q12: ", makeSquares(example));

// // ---------- QUESTION 13 ----------
// // Write a function called 'displaySkills' that takes an array of string values that correspond to skills that you have.
// // Iterate through the array and display each skill. This function should print each skill, not return anything.

// // EXAMPLE CALL:
// //  const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
// //  displaySkills(skills);
// // EXAMPLE OUTPUT:
// //  Javascript
// //  HTML
// //  CSS
// //  Adobe Photoshop
// //  GitHub

// // PUT YOUR CODE HERE

// const skills = ["coding", "unicycle riding", "weight lifting", "cooking"];

// function displaySkills(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// displaySkills(skills);

// // ---------- QUESTION 14 ----------
// // In the early 2000s, this was a famous technical interview question: 
// // Write a function called 'fizzBuzz' that takes NO parameters. 
// // - The function will loop from 1 to 15 and return an array of numbers. 
// // - While looping, the function will check if the current value in the loop is divisible by 3, by 5, or by both.
// // - If the current value in the loop is divisible by 3, the function will add the string "fizz" to an array.
// // - If the current value in the loop is divisible by 5, the function will add the string "buzz" to the array.
// // - If the current value in the loop is divisible by both, the function will add the value "fizzbuzz" to the array.
// // - If the number isn't divisible by 3, 5, OR both, it will add the number to the array.
// // The function will return the array of values.
// // Hint: Check for ‘divisible by both 3 and 5’ first, before checking each individually

// // EXAMPLE LOG:
// //  console.log("Q14: ", fizzBuzz());
// // EXAMPLE OUTPUT:
// //  Q14: [1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz']

// // PUT YOUR CODE HERE

// // How to check if something is divisible by 3?
// // const testNum = 3;
// // console.log(testNum % 3 == 0)

// function fizzBuzz() {
//     const array = [];
//     for (let i = 1; i < 16; i++) {
//         if ((i % 3 == 0) && (i % 5 == 0)) {
//             array.push('fizzbuzz');
//         } else if (i % 3 == 0) {
//             array.push("fizz");
//         } else if (i % 5 == 0) {
//             array.push("buzz");
//         } else {
//             array.push(i);
//         }
//     }
//     return array;
// }
// console.log("Q14: ", fizzBuzz())

// // ---------- QUESTION 15 ----------
// // Write a function called testScope that shows the difference between global, function and block scope.
// // Create 3 variables - 
// //  let globalVar = "globarVar";
// //  let functionVar = "functionVar";
// //  let blockVar = "blockVar";
// // Place the variables correctly in your code (think about where each one needs to be declared
// // so its name matches its scope) and log them from within the scope where they're accessible.
// // Also, place 2 log statements for the functionVar and blockVar that are commented out, but
// // would result in an error if uncommented - because the variable they are referencing is out
// // of scope at that point in the code.

// // There is no single example output for this question - the "right answer" is the structure of
// // your code itself, including the two commented-out lines that demonstrate scope errors.

// // PUT YOUR CODE HERE

// let globalVar = "globalVar";

// function testScope() {
//     let functionVar = "functionVar";
//     for (let i = 0; i < 1; i++) {
//         let blockVar = "blockVar";
//         console.log("Q15 blockVar: ", blockVar);
//     }
//     console.log("Q15 globalVar: ", globalVar);
//     console.log("Q15 functionVar: ", functionVar);
//     // console.log("Q15 blockVar: ", blockVar);
// }
// // console.log("Q15 functionVar: ", functionVar);
// // console.log("Q15 blockVar: ", blockVar);
// testScope();

// // ---------- GITHUB TASK ----------
// // This week, you cloned the new GitHub repository from week 1. 
// // Confirm that you followed the GitHub cloning instructions in the lesson portion. There is no code or a link to submit for this section.

// ----------------- EXTRA PACTICE ------------------------

/* 
1. Collect numbers until a stopping point — while
Write a function called collectUntilZero that takes an array of numbers and returns a new array containing everything before the first 0.
Requirements:
- Use a while loop.
- Stop when you reach 0 or the end of the array.
- Exclude the 0 and everything after it.
- Don’t modify the original array.
*/

function collectUntilZero(array) {
    let index = 0;
    let outputArray = [];
    while ((index < array.length) && (array[index] != 0)) {
        outputArray.push(array[index]);
        index++;
    }
    return outputArray;
}

// Test Cases:
// console.log(collectUntilZero([4, 7, 2, 0, 9, 5])); // [4, 7, 2]
// console.log(collectUntilZero([3, 8, 1])); // [3, 8, 1]
// console.log(collectUntilZero([0, 6, 2])); // []
// console.log(collectUntilZero([])); // []

/* 
2. Compare scores — arrow functions
Write an arrow function called compareScores that takes two arrays of numbers and returns a new array comparing the numbers at the same index.
For each position, return:
- "higher" if the first array’s number is greater.
- "lower" if the first array’s number is smaller.
- "equal" if the numbers match.
Requirements:
- Define compareScores using arrow syntax.
- Use .map() with an arrow callback.
- Assume the input arrays have the same length.
- Don’t modify either input array.
*/

const array1 = [1, 2, 3];
const array2 = [1, 0, 4];

function compareScores(arrayA, arrayB) {
    const output = arrayA.map((elem, index) => {
        if (elem < arrayB[index]) {
            return "lower";
        } else if (elem > arrayB[index]) {
            return "higher";
        } else {
            return "equal";
        }
    });
    return output;
}
console.log(compareScores(array1, array2));
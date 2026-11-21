//----------------------------------
// LESSON 4 ALGORITHMS
//----------------------------------

// ---------- QUESTION 1 ----------
// Create a function called 'convertTemp' that takes 1 temperatue parameter in celsius and return the temperature in Fahrenheit.  Log both the input and output values

// EXAMPLE LOG:
//    console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// EXAMPLE OUTPUT:
//    Q1 convertTemp: 0 32

// Call convertTemp with several different celsium temperatures

// PUT YOUR CODE HERE

/* 
- How to convert from C -> F? (degC * 9/5) + 32 = degF 
*/

function convertTemp(degC) {
    return (degC * 9/5) + 32;
}

console.log(`Q1 covertTemp: °C: 0 °F: ${convertTemp(0)}`);
console.log(`Q1 covertTemp: °C: 10 °F: ${convertTemp(10)}`);
console.log(`Q1 covertTemp: °C: 50 °F: ${convertTemp(50)}`);
console.log(`Q1 covertTemp: °C: 100 °F: ${convertTemp(100)}`);
console.log(`Q1 covertTemp: °C: -100 °F: ${convertTemp(-100)}`);

// ---------- QUESTION 2 ----------
// Create a function called 'reverseString' that takes 1 string parameter and returns the reverseString.  Use a for loop.  Log both the input and output values.

// EXAMPLE LOG:
//    console.log("Q2 reverseString: ", inputString, reverseString(inputString));
// EXAMPLE OUTPUT:
//    Q2 reverseString: HelloWorld dlroWolleH

// Call reverseString with several different strings.  Make sure it works for an empty string.

// PUT YOUR CODE HERE

/* SOLUTION
- Create a for loop that iterates over the string (starts from the length of the string & decreaases to 0)
- Store the letter in an array 
- Print the array 
*/


function reverseString(input) {
    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input.charAt(i);
    }
    return reversed;
}

console.log("Q2 reverseString: ", "HelloWorld", reverseString("HelloWorld"));
console.log("Q2 reverseString: ", "Master of my own universe!", reverseString("Master of my own universe!"));

// ---------- QUESTION 3 ----------
// Let's make a useful math problem - create a tip calculator!  Create a function named tipCalculator that takes two parameters - billTotal and tipPercentage.   Return the total bill amount

// EXAMPLE LOG:
//    console.log("Q3 tipCalculator: ", tipCalculator (20, .20));
// EXAMPLE OUTPUT:
//    Q3 tipCalculator: 50 0.2 60

// PUT YOUR CODE HERE

// Don't forget your console.logs!

/* 
- Calculate total bill: finalPrice = billTotal + (billTotal * tipPercentage)   
*/

function tipCalculator(billTotal, tipPercentage) {
    let finalPrice = billTotal + (billTotal * tipPercentage);
    return finalPrice;
}

// tipCalculator(50, 0.2);
// tipCalculator(150, 0.2);

console.log("Q3 tipCalculator: ", 50, 0.2, tipCalculator(50, 0.2));
console.log("Q3 tipCalculator: ", 150, 0.5, tipCalculator(150, 0.5));


// ---------- QUESTION 4 ----------
// Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product  of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// EXAMPLE LOG:
//    console.log("Q4: ", num1, num2, multiplyThese(num1, num2));
// EXAMPLE OUTPUT: 
//    Q4 multiplyThese: 10 10 100

// PUT YOUR CODE HERE

var num1 = 10;
var num2 = 10;

function multiplyThese(num1, num2) {
    let product = num1 * num2;
    return product;
}
console.log(`Q4: ${num1}, ${num2}, ${multiplyThese(num1, num1)}`);


// ---------- QUESTION 5 ----------
// Create a function called 'getAverage' that takes 2 parameters and returns their average.  NOTE: In some programming languages, the types of numbers you use in equations can affect what type of number (integer/floating point) you get as a result.  We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//    console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
// EXAMPLE OUTPUT: 
//    Q5 getAverage: 3 6 4.5

// PUT YOUR CODE HERE

var num1 = 50;
var num2 = 10;

function getAverage(num1, num2) {
    let average = (num1 + num2) / 2;
    return average;
}
console.log(`Q5: ${num1}, ${num2}, ${getAverage(num1, num2)}`);

// ---------- QUESTION 6 ----------
// Create a function named 'isPrime' that returns true or false based on whether the number is prime or not.
// Hint: Prime numbers are numbers that are divisible by any number from 2 up to the square root of the number.  0 and 1 are not prime numbers. Wikipedia has a handy list of the first 1,000 prime numbers in an article called "List of prime numbers."
// Make sure you test several prime and non prime numbers along with 0 and 1.

// EXAMPLE LOG:
//   console.log("Q6 isPrime: ", number, isPrime(number));
// EXAMPLE OUTPUT: 
//   Q6 isPrime: 12 false

// PUT YOUR CODE HERE

/* 
- How do we know if a number is prime? (ex: 2, 3, 5, 7, 11)

1. Check if the input is greater than 1.
2. Create an array of divisors from 2 - sqrt(n) and divide the input by every number
    - if the input is divisible by any of these numbers => prime
    - otherwise composite
*/

function isPrime(number) {
    let divisors = [];
    let prime = true;

    // note: 1 is not a prime number
    if (number > 1) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            // listing out potential divisors
            divisors.push(i);
        }
        // console.log("divisors: ", divisors);

        for (let i = 0; i < divisors.length; i++) {
            // checking primality: does the number divide nicely? (no remainder)
            if (((number / divisors[i]) % 2) == 0) {
                // console.log("Look Here: ", divisors[i])
                prime = false;
            }
        }
    } else {
        prime = false;
    }
    return prime;
}
console.log("Q6 isPrime: ", 1, isPrime(1)); // false
console.log("Q6 isPrime: ", 2, isPrime(2)); // true
console.log("Q6 isPrime: ", 3, isPrime(3)); // true
console.log("Q6 isPrime: ", 4, isPrime(4)); // false
console.log("Q6 isPrime: ", 11, isPrime(11)); // true
console.log("Q6 isPrime: ", 16, isPrime(16)); // false
console.log("Q6 isPrime: ", 20, isPrime(20)); // false
console.log("Q6 isPrime: ", 100, isPrime(100)); // false

// ---------- QUESTION 7 ----------
// Using the 'isPrime' function created in the previous question, create another function named 'getPrimesUpTo' that takes an integer as an input and returns an array of all primes up to and including the input number. 
// Be sure to include several test cases

// EXAMPLE LOG:
//   console.log("Q7 getPrimesUpTo: ", number, getPrimesUpTo(number));
// EXAMPLE OUTPUT:
//   Q7 getPrimesUpTo: 13 [2,3,5,7,11,13]

// PUT YOUR CODE HERE

/* 
- Take in a number and use a for loop to iterate over all its predecessors
- If they are prime -> store them, otherwise continue
- Return the list of all prime predecessors
*/

function getPrimesUpTo(number) {
    let primes = [];
    for (let i = 2; i <= number; i++) {
        // console.log(i);
        if (isPrime(i)) {
            primes.push(i);
        };
    }

    return primes; // TODO: not returning as an array, why?
}
console.log("Q7 getPrimesUpTo: 13,", getPrimesUpTo(13)); // [2,3,5,6,7,9,10,11,13]
console.log("Q7 getPrimesUpTo: 1,", getPrimesUpTo(1)); // []
console.log("Q7 getPrimesUpTo: 2,", getPrimesUpTo(2)); // []

// ---------- QUESTION 8 ----------
// Now, we're going to write several functions that calculate a student's grade.  
// First, write a function named 'calculateAverage' that takes an input array of scores and calculates a student's average based on those scores.
// Check all of the grades in the array and ignore any values that are not in the range 0 - 100.
// Also, make sure that an empty array or no valid values in the array do not result in an error (hint: watch out for dividing by zero)

// EXAMPLE LOG:
//   console.log("Q8 calculateAverage: ", calculateAverage(scores));
// EXAMPLE OUTPUT:
//   Q8 calculateAverage: 85  // input array let scores = [90, 80, 85];

// PUT YOUR CODE HERE
/* 
1. Cannot divide by 0 => if array.length == 0 => break
2. Check if all elements in the arr are from 0-100, then calculate average score

- How do I check in an input is valid? (nan, )
Ex: [nan, nan, nan]
*/

function calculateAverage(scoreArr) {
    let totalScore = 0;
    let validElems = 0;
    let average = 0;

    if ((scoreArr.length == 0)) {
        average = undefined;
    } else {
        // calculating the average:
        for (let i = 0; i <= scoreArr.length - 1; i++) {
            // checking for valid range:
            if (scoreArr[i] >= 0 && scoreArr[i] <= 100) {
                totalScore += scoreArr[i];
                validElems += 1; // would divide by zero if no valid elems found
            } else {
                average = undefined;
            }
        }
        // avoids dividing by zero:
        if (validElems > 0) {
            average = totalScore / validElems;
        }
    }
    return average;
}

// TEST CASES:
console.log(`Q8 calculateAverage: ${calculateAverage([5, 10, 5, 20, 10])}`);
console.log(`Q8 calculateAverage: ${calculateAverage([100, 100, 100])}`);
console.log(`Q8 calculateAverage: ${calculateAverage([0, 0, 0])}`);
console.log(`Q8 calculateAverage: ${calculateAverage([])}`);
console.log(`Q8 calculateAverage: ${calculateAverage([undefined, undefined])}`);
console.log(`Q8 calculateAverage: ${calculateAverage([20, undefined, 30])}`);
console.log(`Q8 calculateAverage: ${calculateAverage([NaN, NaN, 1])}`);

// ---------- QUESTION 9 ----------
// Now, create a function - getLetterGrade(average) - that takes a grade average and returns a letter grade based on the following scale.  Make sure you test with several averages.
// A: 90–100
// B: 80–89
// C: 70–79
// D: 60–69
// F: below 60
// NOTE: Averages like 75.5 are fine to compare directly, but if calculateAverage ever returns a long decimal
// (e.g. 97.66666666666667), it's good practice to round it before displaying it to a user.
// Look up the .toFixed() method and consider using it when you log your average in Question 11.

// EXAMPLE LOG:
//   console.log("Q9 getLetterGrade: ", getLetterGrade(95));
// EXAMPLE OUTPUT:
//   Q9 getLetterGrade(95): A

// PUT YOUR CODE HERE

/* 
- Round the grade average to two decimal points before comparing
- Use if statements to assign the grade average to a grade letter
- Return letter grade
- Edge Cases: undefined average score
*/

function getLetterGrade(averageScore) {
    let letterGrade = "";
    
    // Handling edge case: undefined
    if (!(averageScore == undefined)) {

        let roundedScore = averageScore.toFixed(2);

        // Matching the rounded score to a letter bucket:
        if ((roundedScore >= 90) && (roundedScore <= 100)) {
            letterGrade += "A";
        } else if ((roundedScore >= 80) && (roundedScore <= 89)) {
            letterGrade += "B";
        } else if ((roundedScore >= 70) && (roundedScore <= 79)) {
            letterGrade += "C";
        } else if ((roundedScore >= 60) && (roundedScore <= 69)) {
            letterGrade += "D";
        } else if (roundedScore < 60) {
            letterGrade += "F";
        }
    } else {
        letterGrade = undefined;
    }
    return letterGrade;
}

console.log(`Q9 getLetterGrade(95): `, getLetterGrade(95)); // A
console.log(`Q9 getLetterGrade(97.66666666666667): `, getLetterGrade(97.66666666666667)); // A
console.log(`Q9 getLetterGrade(84): `, getLetterGrade(84)); // B
console.log(`Q9 getLetterGrade(72.4956): `, getLetterGrade(72.4956)); // C
console.log(`Q9 getLetterGrade(60.5): `, getLetterGrade(60.5)); // C
console.log(`Q9 getLetterGrade(59.5): `, getLetterGrade(59.5)); // F
console.log(`Q9 getLetterGrade(undefined): `, getLetterGrade(undefined)); // undefined


// ---------- QUESTION 10 ----------
// Create a 3rd function named - passed(letterGrade) - that returns true if a student's grade is A, B or C, false otherwise.  Handle unexpected input values other than A,B,C,D or F.

// EXAMPLE LOG:
//   console.log("Q10 passed('A'): ", passed('A'));
// EXAMPLE OUTPUT:
//   Q10 passed('A''): true

// PUT YOUR CODE HERE

/* 
1. Check if the input is valid using if-statement
2. Check if the student passed using if-statement; nested
*/

function passed(letterGrade) {
    const passingLetters = ['A', 'B', 'C'];
    let passed = false;

    // Is the input valid?
    if ((typeof letterGrade == "string")) {
        // Is the letter grade passing?        
        if (passingLetters.some(letter => letterGrade.toUpperCase().includes(letter))) {
            passed = true;
        }
    } else {
        passed = undefined;
    }
    return passed;
}
console.log(`Q10 passed(A): ${passed("A")}`);
console.log(`Q10 passed(B): ${passed("B")}`);
console.log(`Q10 passed(c): ${passed("c")}`);
console.log(`Q10 passed(f): ${passed("f")}`);
console.log(`Q10 passed(undefined): ${passed(undefined)}`);

// ---------- QUESTION 11 ----------
// Create a function named printClassResult (className, student, scores) that utilizes all three functions to output information on a student.
// Print yes if they have passed and no if they did not.

// EXAMPLE LOG:
//   console.log("Q11: ", printClassResult ("History 101", "Yuki Kawamura", [60, 70, 85, 87]));  
// EXAMPLE OUTPUT:
//   Q11: History 101 - Student: Yuki Kawamura, Average: 75.5, Grade: C, Passed: yes

// PUT YOUR CODE HERE

/* 
1. Use caclulateAverage(scoreArr) to calculate the student's average score
2. Use getLetterGrade(averageScore) to get there letter grade for the class
3. Use passed(letterGrade) to determine whether they passed the class or not
4. Print the infomration to the console as instructed
*/

function printClassResult(className, studentName, scoreArray) {
    let averageScore = calculateAverage(scoreArray);
    let letterGrade = getLetterGrade(averageScore);
    let status = '';

    if (passed(letterGrade)) {
        status = "yes";
    } else {
        status = "no";
    }

    return `${className} - Student: ${studentName}, Average: ${averageScore}, Grade: ${letterGrade}, Passed: ${status}`;
}
console.log(`Q11: ${printClassResult("History 101", "Yuki Kawamura", [60, 70, 85, 87])}`);
console.log(`Q11: ${printClassResult("Intro to JavaScript", "Rick Sanchez", [90, -1, undefined, 2, 98, 0, 100, 110])}`);

// ---------------------------------------------------------------
// A NOTE BEFORE QUESTIONS 12 - 14: FUNCTIONS AS VALUES
// ---------------------------------------------------------------
// So far, every function you've written has been \*called\* directly, like multiplyThese(2, 3).
// But in JavaScript, a function is also just a value — like a number or a string — which means
// you can store it in a variable, put it in an array, or hand it to ANOTHER function as an argument.
//
// A function that is passed into another function to be run later is called a "callback."
// Callbacks are everywhere in JavaScript — they're how you tell code what to do when a button is
// clicked, when data finishes loading, or when a timer runs out.
//
// Before jumping into callbacks, let's warm up with the idea of functions as values.

// ---------- QUESTION 12 ----------
// Create a simple function called 'sayHello' that logs "Hello!" to the console.
// Then, WITHOUT calling sayHello() yourself, pass it directly into setTimeout so that it runs
// automatically after 1 second (1000 milliseconds).
// Notice that you are passing the function itself (sayHello), not the result of calling it (sayHello()).

// EXAMPLE CALL:
//   setTimeout(sayHello, 1000);

// EXAMPLE OUTPUT (after about 1 second):
//   Q12: Hello!

// PUT YOUR CODE HERE

function sayHello() {
    console.log("Q12: Hello!");
}

setTimeout(sayHello, 1000);

// ---------- QUESTION 13 ----------
// Now, let's see how to use a callback.  First, create a function that simulates pushing a button.  Name the function buttonPushed and log the message "The button was pushed!" in the function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//    buttonPushed();

// EXAMPLE OUTPUT: (we're using this function in the next question as well)
//   Q13, Q14: The button was pushed!

// PUT YOUR CODE HERE

function buttonPushed() {
    console.log("Q13, Q14: The button was pushed!");
}

buttonPushed();

// ---------- QUESTION 14 ----------
// Now, create a function called simulateButtonPush that takes a function as a parameter, and calls
// that function inside of it. Then pass the buttonPushed function (created in Question 12) into it.
// This is the same pattern you just used with setTimeout — simulateButtonPush doesn't know or care
// what buttonPushed does, it just knows it received a function and that its job is to call it.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//    simulateButtonPush(buttonPushed);

// EXAMPLE OUTPUT: 
//   Q13, Q14: The button was pushed!

// PUT YOUR CODE HERE

function simulateButtonPush(myCallBack) {
    myCallBack();
}

simulateButtonPush(buttonPushed);

// ---------- GITHUB TASK ----------
// This week, you merged your lesson-3 branch into the main branch of your practice GitHub repository.
// - Confirm that your main branch contains the \`index.html\` file from Lesson 3.
// - Then, from GitHub's web editor, copy the link to the main branch of the repository and paste it into the "second link to assignment field" in your assignment submission form.
// NO CODE FOR THIS SECTION
console.log(`-------------------------- 
Question 1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.`)

let ages = [3, 9, 23, 64, 2, 8, 28, 93, 56];
// In order to ensure this equation is dynamic we can create two variables equal 
// the first value & second value then console.log the equation
let firstElement = ages[0]
let lastElement = ages[ages.length - 1];

console.log(lastElement - firstElement);


// returned: 90 first time
// returned: 53 after new value was added

// Function was created to calculate the average.
// Within the function I created a for loop in order to iterate through each index value. 
// The sum acts as a counter for the previous value (starting with 0 or no value)
function averageOfAges(array) {
    let sum = 0;
    for( let i = 0; i < ages.length; i++ ) {
        sum += ages[i];
    }
    return sum / ages.length;
}

console.log(averageOfAges(ages));

console.log(`-------------------------- 
Question 2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
`)

// I used the equation below to calculate the average number of letters per string to check my answer.

// let avg = names.join('').length / names.length;
// console.log(avg);

// The equation below allows me to calculate the length of each string at a given index which will be replaced
// with the variable 'i'. 
// console.log(names[1].length);

// setting sum equal to 0 to use as a counter for the number of letters in each name.
let sum = 0;
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let counter = ''

// Creating a function that contains a for loop allowing us to iterate through each index value
// Using the sum variable allows us to add each value (names[i].length) as the loop iterates.
// Finally the function is returning the sum of all items in the array and dividing by the arrays length.

function averageNumberOfLetters(namesarray) {
    for( let i = 0; i < names.length; i++) {
        sum += names[i].length
    }
    return sum / names.length
}

// Below I am invoking the function by calling it and inputting the "names" array as the parameter that will pass through the
// function averageNumberOfLetters.
console.log(averageNumberOfLetters(names));

// function that holds a for loop iterating through each name and adding a space in between each element
// Using an empty string as a counter to add element after each iteration and added ' ' and empty space after each element
// to seperate the names.
function concatNames(arrayOfNames) {
    for( let i = 0; i < names.length; i++ ) {
        counter += names[i] + ' ';
    }
    return counter
}
console.log(concatNames(names))

console.log(`-------------------------- 
Question 3: How do you access the last element of any array?`)

console.log(`You can access the last element in an array by using the function arrayName.length - 1. This is the best practice
in case the length of the array changes.`)

console.log(`-------------------------- 
Question 4: How do you access the first element of any array?`)

console.log(`You can access the first element of an array by using arrayName[0] since arrays have a zero based index.`)

console.log(`-------------------------- 
Question 5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and
add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array
`)

// Creating a new array called nameLengths and setting it equal to an empty array. This is where we will .push() all
// the data to. 
let nameLengths = [];
// Using 'i' as a variable for the index.
// Looping through the names array we add each iterate LENGTH to the nameLengths array.
// in order to add the elements to the new array we use the .push() method.

for( i = 0; i < names.length; i++ ) {
    nameLengths.push(names[i].length);
}

console.log(nameLengths)

console.log(`-------------------------- 
Question 6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`)

// Setting a new varible equal to 0 to use as a counter to add to the nameLengths. 
let sumOfNameLengths = 0;
for( let i = 0; i < nameLengths.length; i++) {
    console.log(nameLengths[i])
    sumOfNameLengths += nameLengths[i];
}
console.log(sumOfNameLengths)
// Logging sumOfNameLengths after it has looped through the function to print sum to console.

console.log(`-------------------------- 
Question 7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`)

// After researching found that the .repeat() function will repeat strings x amount of times. Using word as the parameter
// for the arguement "Hello" & n as the parameter for the number 3.

function someFunction(word, n) {
    console.log(word.repeat(n));
}

someFunction("Hello", 3)


console.log(`-------------------------- 
Question 8: Write a function that takes two parameters, firstName and lastName, and returns a full name.
The full name should be the first and the last name separated by a space.`)

let fullName = (firstName, lastName) => (`${firstName} ${lastName}`)

console.log(fullName("Citlally", "Hernandez"));


console.log(`-------------------------- 
Question 9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`)
//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

// Researched the array.reduce() which allows developers to sum the elements of an array by adding the previous value (accumulator)
// to the current value (currentValue) in a call back function. We start with an initialValue of 0 to initialize the accumulator
// so the currentValue has a number to add to. 
// Once I made a variable for the .reduce() function I was able to check if the sum of all numbers in an array (sumWithInitial)
// was greater than 100 and print true to console if so. 

let sumOfNumbers = anArray => {
    let initialValue = 0;
    let sumWithInitial = anArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    if (sumWithInitial > 100) {
        console.log(true);
    } else {
        console.log(false);
    }
}

sumOfNumbers([30, 52, 12, 5, 2, 14]); //true
sumOfNumbers([12, 4, 23, 6, 0, 1, 5]); //false
sumOfNumbers([3, 5, 23, 42, 55, 12]); //true
sumOfNumbers([10, 20, 20, 15, 30, 5]) //false

// Above are some arrays that are > 100, < 100, & === 100 all test cases passed.

console.log(`-------------------------- 
Question 10: Write a function that takes an array of numbers and returns the average of all the elements in the array.`)

// Began by naming a function averageOfNumbers which takes in numberArray as a parmeter. 
// Making a counter using varibale sumOfNumbersArray
// Adding each iterate value within numberArray
// Finally divide the sum by the length of the array to get the average of elements in numberArray.

function averageOfNumbers(numberArray) {
    let sumOfNumbersArray = 0;
    for(i = 0; i < numberArray.length; i++ ) {
        sumOfNumbersArray += numberArray[i];
    }
    console.log(sumOfNumbersArray / numberArray.length);
}

averageOfNumbers([3, 5, 2, 7, 10]);    // 5.4
averageOfNumbers([4, 7, 23, 62, 3]);  // 19.8
averageOfNumbers([17, 5, 34, 72, 4]); // 26.4

console.log(`-------------------------- 
Question 11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array
is greater than the average of the elements in the second array.`)

// Writing a function that will compare the sum of both arrays
function whichAverageIsGreater(firstArray, secondArray) {
    // setting sumOfFirstArray & sumOfSecondArray equal to 0 as a counter in the foor loop which adds each iterate value.
    let sumOfFirstArray = 0;
    for(i = 0; i < firstArray.length; i++) {
        sumOfFirstArray += firstArray[i]
    }
    let sumOfSecondArray = 0;
    for(ii = 0; ii < secondArray.length; ii++) {
        sumOfSecondArray += secondArray[ii]
    }
    // calculating the average using variable avgOfFirstArray & avgOfSecondArray
    let avgOfFirstArray = sumOfFirstArray / firstArray.length;
    let avgOfSecondArray = sumOfSecondArray / secondArray.length;
    // After the variables for average are set we can use an if statement to determine which value is greater
    // Finally print true to console is first array is greater than the second array.
    if(avgOfFirstArray > avgOfSecondArray) {
        console.log(true);
    } else {
        console.log(false)
    }
}

whichAverageIsGreater([5, 4, 8, 2], [1, 2, 5, 2]);

whichAverageIsGreater([1, 2, 5, 2], [5, 4, 8, 2]);

whichAverageIsGreater([1, 2, 5, 2], [1, 2, 5, 2]);

console.log(`-------------------------- 
Question 12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true
if it is hot outside and if moneyInPocket is greater than 10.50.`)

//First step create a function that takes two parmeters isHotOutside & moneyInPocket
function willBuyDrink (isHotOutside, moneyInPocket) {
    // This if function will ensure BOTH parameters are true before proceeding with the {} and logging true
    if(isHotOutside && (moneyInPocket > 10.50)) {
        console.log(true)
    } // This else serves to check our answer and ensure all possible inputs will output the correct answer.
        else {
        console.log(false)
    }
}

willBuyDrink(true, 11.25);

willBuyDrink(true, 10.50);

willBuyDrink(false, 20);

willBuyDrink(true, 3.25);

willBuyDrink(false, 1.25);

// Above are test cases to make sure our function works as expected.

console.log(`-------------------------- 
Question 13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`)

// This function serves to tell an individual how much money they are able to invest at the end of the month.
// Each parameter is an array that contains a list of expenses & a list of the income throughout the month.
// Each array is then put into a for loop to determine the sum.
// After we find the sum we see the difference and print it to our console with the phrase
// "Month Investment:"
function monthlyInvestments (monthlyIncome, monthlyExpenses) {
    let sumOfIncome = 0;
    let sumOfExpenses = 0;
    for(i = 0; i < monthlyIncome.length; i++) {
        sumOfIncome += monthlyIncome[i];
    }
    for(i = 0; i < monthlyExpenses.length; i++) {
        sumOfExpenses += monthlyExpenses[i];
    }
    if(sumOfIncome > sumOfExpenses) {
        console.log(sumOfIncome - sumOfExpenses)
    } else {
        console.log("Uh-oh! We need to pick up an extra shift!")
    }
}

let juneIncome = [346.22, 403.76, 377.42, 428.54, 217.88]
let juneExpenses = [750, 257.44, 130.20, 78.23, ]

console.log("June Investment: ");
monthlyInvestments(juneIncome, juneExpenses);

// We can make a more elaborate function by including What each index represents, adding those items into one array
// and then calling the function monthlyInvestments


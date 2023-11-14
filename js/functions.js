"use strict";
function sayHello(name) {
    return "Hello, " + name + "!";
}
let greeting =sayHello("Jim");
console.log(greeting);
/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let hellowMessage = sayHello("Jim");
console.log(hellowMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Jim";
let helloMessage = sayHello(myName);
console.log(helloMessage);


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
const random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(number) {
    return number === 2;
}
let result = isTwo(random);

console.log("Is the number 2?: " + result);
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
function calculateTip(tipPercentage, totalBill) {
    let tipAmount = (tipPercentage / 100) * totalBill;
    return tipAmount;
}
let tip = calculateTip(15, 50); // Calculate a 15% tip on a $50 bill
console.log("Tip amount: $" + tip.toFixed(2)); // Outputs: Tip amount: $7.50


/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
let totalBill = prompt("What is the total bill amount?");
let tipPercentage = prompt("What percentage would you like to tip?");
totalBill = parseFloat(totalBill);
tipPercentage = parseFloat(tipPercentage);

let tipAmount = calculateTip(tipPercentage, totalBill);

alert("You should tip $" + tipAmount.toFixed(2));



/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > let originalPrice = 100;
 * > let discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
function applyDiscount(price, discountPercentage) {

    let discountAmount = price * discountPercentage;
    let discountedPrice = price - discountAmount;
    return discountedPrice
}
console.log(applyDiscount(10, 5))
let originalPrice = 100;
let discount = 0.2; // 20% discount
let newPrice = applyDiscount(originalPrice, discount);
console.log("The price after discount is: $" + newPrice.toFixed(2));


// Problem 2 Break and Continue
while (true) {
    // Prompt the user for input
    let userInput = prompt("Enter an odd number between 1 and 50");

    // Convert the input to a number
    let number = parseInt(userInput);

    // Check if the number is odd and within the specified range
    if (!isNaN(number) && number % 2 !== 0 && number >= 1 && number <= 50) {
        alert("Thank you! Your number is: " + number);
        break; // Exit the loop if valid input is entered
    } else {
        alert("Invalid input. Please enter an odd number between 1 and 50.");
    }
}
// Problem 3 Break and continue
let userInput;
while (true) {
    userInput = prompt("Enter an odd number between 1 and 50");
    userInput = parseInt(userInput);

    // Check if the number is odd and within the specified range
    if (!isNaN(userInput) && userInput % 2 !== 0 && userInput >= 1 && userInput <= 50) {
        break; // Exit the loop if valid input is entered
    }
}

console.log("Number to skip is: " + userInput);

for (let i = 1; i <= 50; i += 2) { // Increment by 2 to loop through odd numbers only
    if (i === userInput) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    }
    console.log("Here is an odd number: " + i);
}

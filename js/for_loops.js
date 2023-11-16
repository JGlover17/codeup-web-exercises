// Problem 2 for loops
function showMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

// Example of how to use the function
showMultiplicationTable(5);

// Problem 3 for loops
for (let i = 0; i < 10; i++) {

    let randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20;

    // Check if the number is odd or even
    let type = (randomNumber % 2 === 0) ? 'even' : 'odd';

    // Output the result to the console
    console.log(randomNumber + " is " + type);
}
// Problem 4 for loops
for (let i = 1; i <= 9; i++) {
    let output = '';
    for (let j = 1; j <= i; j++) {
        output += i; // Append the current number to the output string
    }
    console.log(output);
}
// Problem 5 for loops
for (let i = 100; i >= 5; i -= 5) {
    console.log(i);
}


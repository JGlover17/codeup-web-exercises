//Problem 2 While Loops
let number = 2;

while (number <= 65536) {
    console.log(number);
    number *= 2; // Double the number in each iteration
}
// Problem 1 Do While Loop
// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;

do {
    // This expression will generate a random number between 1 and 5
    let conesSold = Math.floor(Math.random() * 5) + 1;

    if (conesSold > allCones) {
        console.log(`Cannot sell ${conesSold} cones, I only have ${allCones}...`);
        continue; // Skip to the next iteration if conesSold is more than allCones
    }

    // Update the total number of cones remaining
    allCones -= conesSold;

    // Log the number of cones sold
    console.log(`${conesSold} cones sold...`);
} while (allCones > 0);

console.log('Yay! I sold all the cones!');

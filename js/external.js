console.log("Hello,World! From external JavaScript");

alert("Welcome to my Website!");

let userInput = prompt('What is your favorite color?:');
alert(`Great, ${userInput} is my favorite too!`)

let daysRentedmermaid = prompt("How many days have you rented 'The Little Mermaid'?");
let daysRentedbrotherbear = prompt("How many days have you rented 'Brother Bear'?");
let daysRentedhercules = prompt("How many days have you rented 'Hercules'?");

daysRentedmermaid = parseInt(daysRentedmermaid)
daysRentedbrotherbear = parseInt(daysRentedbrotherbear)
daysRentedhercules = parseInt(daysRentedhercules)
costPerDay = 3;

let totalCost = (daysRentedmermaid + daysRentedbrotherbear + daysRentedhercules) * costPerDay;

alert("The total cost for renting 'your movies' is $" + totalCost + ".");

let googlepayperhour = prompt("How much does Google pay you per hour?");
let amazonpayperhour = prompt("How much does Amazon pay you per hour?");
let facebookpayperhour = prompt("How much does Facebook pay you per hour?");

googlepayperhour = parseInt(googlepayperhour)
amazonpayperhour = parseInt(amazonpayperhour)
facebookpayperhour = parseInt(facebookpayperhour)

let googlehoursworked = prompt("How many hours did you work for Google this week?");
let amazonhoursworked = prompt("How many hours did you work for Amazon this week?");
let facebookhoursworked = prompt("How many hours did you work for Facebook this week?");

googlehoursworked = parseInt(googlehoursworked)
amazonhoursworked = parseInt(amazonhoursworked)
facebookhoursworked = parseInt(facebookhoursworked)

let totalweeklypay = (googlehoursworked * googlepayperhour) + (amazonhoursworked * amazonpayperhour) + (facebookhoursworked * facebookpayperhour)
alert("Your total weekly pay is $" + totalweeklypay + ".")

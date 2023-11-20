(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
//1
    let person = {
        firstName: "Jim",
        lastName: "Glover"

    };

    console.log(person.firstName); // "Jim"
    console.log(person.lastName); // "Glover"


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

// 2
    // Assuming 'person' is already declared
    person.sayHello = function() {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    };

// Example usage
    console.log(person.sayHello()); // "Hello from Jim Glover!"




    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

//3
     const shoppers = [
        {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
     ];
    shoppers.forEach(function(shopper) {
        if (shopper.amount > 200) {
            const discount = shopper.amount * 0.12; // 12% discount
            const total = shopper.amount - discount;
            console.log(shopper.name + " spent $" + shopper.amount + ", gets a discount of $" + discount.toFixed(2) + ", and needs to pay $" + total.toFixed(2));
        } else {
            console.log(shopper.name + " spent $" + shopper.amount + " and does not qualify for a discount, needs to pay $" + shopper.amount);
        }
    });
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
//4
// Create an array of book objects
    let books = [
        {
            title: "The Great Gatsby",
            author: {
                firstName: "F. Scott",
                lastName: "Fitzgerald"
            }
        },
        {
            title: "To Kill a Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee"
            }
        },
        {
            title: "1984",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        },
        {
            title: "The Catcher in the Rye",
            author: {
                firstName: "J.D.",
                lastName: "Salinger"
            }
        },
        {
            title: "The Hobbit",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien"
            }
        }
    ];

// Example usage
    console.log(books[0].title); // "The Great Gatsby"
    console.log(books[0].author.firstName); // "F. Scott"
    console.log(books[0].author.lastName); // "Fitzgerald"

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
//5
    books.forEach(function(book, index) {
        let authorFullName = book.author.firstName + " " + book.author.lastName;
        console.log("Book " + (index + 1) + ": " + book.title + ", by " + authorFullName);
    });
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
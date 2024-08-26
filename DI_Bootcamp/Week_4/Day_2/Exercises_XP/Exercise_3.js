let number;

do {
    number = prompt("Please enter a number:");
    number = Number(number);
} while (typeof number === 'number' && number < 10);

console.log("Thank you! The number you entered is:", number);

// The do while loop is more relevant because you want to prompt the user at least once before checking the condition
function processInput(input: number | string | boolean): number | string | boolean {
    if (typeof input === "number") {
        return input * input;
    } else if (typeof input === "string") {
        return input.toUpperCase();
    } else if (typeof input === "boolean") {
        return !input;
    }
    throw new Error("Invalid input type");
}

console.log(processInput(5));        // Output: 25
console.log(processInput("hello"));  // Output: HELLO
console.log(processInput(true));     // Output: false
console.log(processInput(false));    // Output: true

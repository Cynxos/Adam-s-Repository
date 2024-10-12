function greet(): string;
function greet(name: string): string;
function greet(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    } else {
        return "Hello there!";
    }
}

console.log(greet());          // Output: Hello there!
console.log(greet("Alice"));   // Output: Hello, Alice!

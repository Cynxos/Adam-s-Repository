function welcomeUser(name: string, greeting?: string): string {
    let greet = greeting || "Hello";
    return `${greet}, ${name}!`;
}

console.log(welcomeUser("Alice"));          // Output: Hello, Alice!
console.log(welcomeUser("Bob", "Welcome")); // Output: Welcome, Bob!

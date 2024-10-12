function getDetails(name: string, age: number): [string, number, string] {
    let greeting = `Hello, ${name}! You are ${age} years old.`;
    return [name, age, greeting];
}

const details = getDetails("Alice", 25);
console.log(details);
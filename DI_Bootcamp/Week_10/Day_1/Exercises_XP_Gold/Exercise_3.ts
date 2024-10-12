type AdvancedUser = {
    name: string;
    age: number;
    address?: string;
};

function introduceAdvancedUser(user: AdvancedUser): string {
    let greeting = `Hello, my name is ${user.name} and I am ${user.age} years old.`;
    if (user.address) {
        greeting += ` I live at ${user.address}.`;
    }
    return greeting;
}

const userWithAddress = {
    name: "Alice",
    age: 30,
    address: "123 Wonderland"
};

const userWithoutAddress = {
    name: "Bob",
    age: 25
};

console.log(introduceAdvancedUser(userWithAddress)); // Output: Hello, my name is Alice and I am 30 years old. I live at 123 Wonderland.
console.log(introduceAdvancedUser(userWithoutAddress)); // Output: Hello, my name is Bob and I am 25 years old.

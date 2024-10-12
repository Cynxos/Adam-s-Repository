function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = {
    name: "Alice",
    age: 30,
    address: "123 Wonderland"
};

console.log(getProperty(user, "name")); // Output: Alice
console.log(getProperty(user, "age")); // Output: 30
console.log(getProperty(user, "address")); // Output: 123 Wonderland

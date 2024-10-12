type MappedType<T> = T extends number ? number : T extends string ? number : never;

function mapType<T extends string | number>(value: T): MappedType<T> {
    if (typeof value === "number") {
        return value * value as MappedType<T>;
    } else if (typeof value === "string") {
        return value.length as MappedType<T>;
    }
    throw new Error("Invalid input type");
}

// Test the function
console.log(mapType(5));       // Output: 25
console.log(mapType("hello")); // Output: 5

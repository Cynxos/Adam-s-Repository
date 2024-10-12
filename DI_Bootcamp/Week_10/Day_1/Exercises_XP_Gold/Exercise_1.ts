function processValue(value: string | number): string {
    if (typeof value === "number") {
        return `$${value.toFixed(2)}`;
    } else if (typeof value === "string") {
        return value.split("").reverse().join("");
    }
    return "";
}

console.log(processValue(100));       // Output: $100.00
console.log(processValue("Hello"));   // Output: olleH

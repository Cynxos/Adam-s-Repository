class Calculator {
    static add(a: number, b: number): number {
        return a + b;
    }

    static subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(Calculator.add(5, 3));       // Output: 8
console.log(Calculator.subtract(5, 3));  // Output: 2

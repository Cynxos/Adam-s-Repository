function formatInput<T extends { toString(): string }>(input: T): string {
    return `Formatted value: ${(input as unknown as string).toString()}`;
}

console.log(formatInput(123));           // Output: Formatted value: 123
console.log(formatInput(true));          // Output: Formatted value: true
console.log(formatInput({ toString: () => "custom object" }));  // Output: Formatted value: custom object

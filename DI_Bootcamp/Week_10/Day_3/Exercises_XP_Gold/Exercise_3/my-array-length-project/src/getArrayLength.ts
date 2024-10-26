function getArrayLength<T extends number | string>(arr: T[]): number {
    return arr.length;
}

console.log(getArrayLength([1, 2, 3, 4]));          // Output: 4
console.log(getArrayLength(["a", "b", "c", "d"]));  // Output: 4

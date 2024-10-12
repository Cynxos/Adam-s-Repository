function sumNumbersInArray(arr: (number | string)[]): number {
    let sum = 0;
    for (const item of arr) {
        if (typeof item === 'number') {
            sum += item;
        }
    }
    return sum;
}

console.log(sumNumbersInArray([1, '2', 3, 'four', 5])); // Output: 9
console.log(sumNumbersInArray(['a', 'b', 100, 50, 'c'])); // Output: 150
console.log(sumNumbersInArray([10, 20, 'thirty', 40])); // Output: 70

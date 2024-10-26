function getFirstElement(arr: (number | string)[]): string {
    return arr[0] as string;
}

console.log(getFirstElement(["hello", 42])); // Output: "hello"
console.log(getFirstElement([100, "world"])); // Output: "100"

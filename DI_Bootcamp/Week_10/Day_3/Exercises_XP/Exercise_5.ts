function logLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

logLength("hello");           // Output: 5
logLength([1, 2, 3, 4, 5]);   // Output: 5

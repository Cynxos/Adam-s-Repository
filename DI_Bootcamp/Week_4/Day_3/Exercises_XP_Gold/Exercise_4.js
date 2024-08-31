function isOmnipresent(arr, value) {
    return arr.every(subArray => subArray.includes(value));
}

console.log(isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 3)); // true
console.log(isOmnipresent([[1, 2], [4, 5], [6, 7]], 3)); // false
console.log(isOmnipresent([[1, 2, 3], [3, 4, 5], [3, 6, 7]], 3)); // true
console.log(isOmnipresent([[1, 2], [2, 3], [4, 5]], 2)); // false

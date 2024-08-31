function swapCase(str) {
    return str.split('').map(char => {
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
}

console.log(swapCase('The Quick Brown Fox')); // "tHE qUICK bROWN fOX"
console.log(swapCase('Hello World!')); // "hELLO wORLD!"
console.log(swapCase('JavaScript')); // "jAVAsCRIPT"

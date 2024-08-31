function abbrevName(name) {
    const splitNames = name.trim().split(" ");
    if (splitNames.length > 1) {
        return `${splitNames[0]} ${splitNames[1].charAt(0)}.`;
    }
    return splitNames[0];
}

console.log(abbrevName("Robin Singh"));
console.log(abbrevName("John Doe")); 
console.log(abbrevName("Alice")); 

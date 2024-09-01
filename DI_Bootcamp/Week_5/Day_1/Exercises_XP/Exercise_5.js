function kgToGrams(weightInKg) {
    return weightInKg * 1000;
}

console.log(kgToGrams(5)); // Output: 5000

const kgToGramsExpr = function(weightInKg) {
    return weightInKg * 1000;
};

console.log(kgToGramsExpr(5)); // Output: 5000

const kgToGramsArrow = weightInKg => weightInKg * 1000;

console.log(kgToGramsArrow(5)); // Output: 5000

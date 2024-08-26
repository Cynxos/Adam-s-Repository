function calculateAverage(gradesList) {
    let sum = gradesList.reduce((a, b) => a + b, 0);
    let average = sum / gradesList.length;
    return average;
}

function findAvg(gradesList) {
    let average = calculateAverage(gradesList);
    console.log(`The average is: ${average}`);
    
    if (average > 65) {
        console.log("You passed!");
    } else {
        console.log("You failed and must repeat the course.");
    }
}

let grades = [70, 80, 90, 60, 50];
findAvg(grades);

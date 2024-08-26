let person1 = {
    fullName: "John Doe",
    mass: 70,
    height: 1.75,
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    }
};

let person2 = {
    fullName: "Jane Smith",
    mass: 65, 
    height: 1.68, 
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    }
};

function compareBMI(person1, person2) {
    let bmi1 = person1.calculateBMI();
    let bmi2 = person2.calculateBMI();

    if (bmi1 > bmi2) {
        console.log(`${person1.fullName} has the largest BMI.`);
    } else if (bmi2 > bmi1) {
        console.log(`${person2.fullName} has the largest BMI.`);
    } else {
        console.log("Both have the same BMI.");
    }
}

compareBMI(person1, person2);

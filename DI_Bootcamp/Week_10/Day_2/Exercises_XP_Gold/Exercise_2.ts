class Car {
    public readonly make: string;
    private readonly model: string;
    public year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public getCarDetails(): string {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}

// Test the class
const myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.getCarDetails()); // Output: Make: Toyota, Model: Corolla, Year: 2022

// Attempt to modify the make and model properties
// myCar.make = "Honda"; // Error
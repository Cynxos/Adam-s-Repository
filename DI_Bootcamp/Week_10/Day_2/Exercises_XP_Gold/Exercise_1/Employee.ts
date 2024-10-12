export class Employee {
    protected name: string;
    protected salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    public getDetails(): string {
        return `Name: ${this.name}, Salary: ${this.salary}`;
    }
}

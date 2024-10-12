import { Employee } from './Employee';

export class Manager extends Employee {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    public getSalaryDetails(): string {
        const bonus = this.calculateBonus();
        return `Salary: ${this.salary}, Bonus: ${bonus}`;
    }
}

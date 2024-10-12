import { Employee } from './Employee';

export class Manager extends Employee {
    public department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary);
        this.department = department;
    }

    public getDetails(): string {
        return `${super.getDetails()}, Department: ${this.department}`;
    }
}

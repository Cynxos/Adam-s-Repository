import { Manager } from './Manager';

export class ExecutiveManager extends Manager {
    constructor(name: string, age: number, salary: number) {
        super(name, age, salary);
    }

    public approveBudget(): string {
        return `Budget approved by Executive Manager ${this.name}`;
    }
}

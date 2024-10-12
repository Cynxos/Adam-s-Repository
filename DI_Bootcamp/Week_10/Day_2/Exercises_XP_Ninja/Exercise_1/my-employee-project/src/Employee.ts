export class Employee {
    public name: string;
    private age: number;
    protected salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    protected calculateBonus(): number {
        return this.salary * 0.1; 
    }

    public getAge(): number {
        return this.age;
    }
}

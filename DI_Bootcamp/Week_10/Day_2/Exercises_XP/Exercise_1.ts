class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    constructor(name: string, salary: number, position: string, department: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    public getEmployeeInfo(): string {
        return `Name: ${this.name}, Position: ${this.position}`;
    }
}

const employee = new Employee("Alice", 50000, "Developer", "Engineering");
console.log(employee.getEmployeeInfo()); // Output: Name: Alice, Position: Developer
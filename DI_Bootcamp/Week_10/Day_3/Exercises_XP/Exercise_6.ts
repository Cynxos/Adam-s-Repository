type Person = {
    name: string;
    age: number;
};

type Job = {
    position: string;
    department: string;
};

type Employee = Person & Job;

function describeEmployee(employee: Employee): string {
    if (employee.position === "Manager") {
        return `${employee.name}, age ${employee.age}, works as a Manager in the ${employee.department} department.`;
    } else if (employee.position === "Developer") {
        return `${employee.name}, age ${employee.age}, works as a Developer in the ${employee.department} department.`;
    }
    return `${employee.name}, age ${employee.age}, works in the ${employee.department} department as a ${employee.position}.`;
}

const manager: Employee = { name: "Alice", age: 34, position: "Manager", department: "Sales" };
const developer: Employee = { name: "Bob", age: 28, position: "Developer", department: "Engineering" };

console.log(describeEmployee(manager));  // Output: Alice, age 34, works as a Manager in the Sales department.
console.log(describeEmployee(developer)); // Output: Bob, age 28, works as a Developer in the Engineering department.

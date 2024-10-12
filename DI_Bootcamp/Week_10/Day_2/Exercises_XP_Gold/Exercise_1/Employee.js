"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Salary: ").concat(this.salary);
    };
    return Employee;
}());
exports.Employee = Employee;

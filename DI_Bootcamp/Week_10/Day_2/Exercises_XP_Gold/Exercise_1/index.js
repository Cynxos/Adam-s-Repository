"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manager_1 = require("./Manager");
var manager = new Manager_1.Manager("Alice", 75000, "Engineering");
console.log(manager.getDetails()); // Output: Name: Alice, Salary: 75000, Department: Engineering

import { ExecutiveManager } from './ExecutiveManager';

const execManager = new ExecutiveManager("Alice", 40, 100000);
console.log(execManager.getSalaryDetails()); // Salary details including bonus
console.log(execManager.approveBudget());    // Budget approval message

import { Addition } from './Addition';
import { Multiplication } from './Multiplication';

const addition = new Addition();
const multiplication = new Multiplication();

console.log(`Addition: ${addition.performOperation(3, 4)}`); // Output: Addition: 7
console.log(`Multiplication: ${multiplication.performOperation(3, 4)}`); // Output: Multiplication: 12

import { Container } from './Container';

type Person = {
    name: string;
    age: number;
    job: string;
};

const container = new Container<Person>();

const person1: Person = { name: "Alice", age: 30, job: "Engineer" };
const person2: Person = { name: "Bob", age: 25, job: "Designer" };

container.add(person1);
container.add(person2);

console.log(container.list()); // Output: [{ name: 'Alice', age: 30, job: 'Engineer' }, { name: 'Bob', age: 25, job: 'Designer' }]

container.remove();
console.log(container.list()); // Output: [{ name: 'Alice', age: 30, job: 'Engineer' }]

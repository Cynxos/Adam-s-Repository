import { Box } from './Box';

const numberBox = new Box<number>();
numberBox.add(1);
numberBox.add(2);
console.log(numberBox.get(0)); // Output: 1
console.log(numberBox.get(1)); // Output: 2

const stringBox = new Box<string>();
stringBox.add("Hello");
stringBox.add("World");
console.log(stringBox.get(0)); // Output: Hello
console.log(stringBox.get(1)); // Output: World

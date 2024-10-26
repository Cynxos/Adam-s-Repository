import { Queue } from './Queue';
import { Item } from './Item';

const numberQueue = new Queue<number>();
numberQueue.add({ value: 1 });
numberQueue.add({ value: 2 });
console.log(numberQueue.remove()); // Output: { value: 1 }
console.log(numberQueue.remove()); // Output: { value: 2 }
console.log(numberQueue.length);   // Output: 0

const stringQueue = new Queue<string>();
stringQueue.add({ value: "hello" });
stringQueue.add({ value: "world" });
console.log(stringQueue.remove()); // Output: { value: "hello" }
console.log(stringQueue.remove()); // Output: { value: "world" }
console.log(stringQueue.length);   // Output: 0

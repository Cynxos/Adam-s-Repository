const _ = require('lodash');
const math = require('./math');

const numbers = [1, 2, 3, 4, 5];

const sum = math.add(10, 20);
const product = math.multiply(10, 20);
const max = _.max(numbers);
const min = _.min(numbers);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
console.log(`Max: ${max}`);
console.log(`Min: ${min}`);

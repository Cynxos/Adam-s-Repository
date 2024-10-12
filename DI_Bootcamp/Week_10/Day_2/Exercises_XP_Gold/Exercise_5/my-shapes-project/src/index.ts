import { RectangleImpl } from './Rectangle';

const myRectangle = new RectangleImpl("blue", 10, 5);
console.log(`Color: ${myRectangle.color}`);
console.log(`Area: ${myRectangle.getArea()}`);        // Output: 50
console.log(`Perimeter: ${myRectangle.getPerimeter()}`); // Output: 30

import { Circle } from './Circle';
import { Square } from './Square';
import { Shape } from './Shape';

const circle = new Circle(5);
console.log(Circle.getType()); // Output: Circle
console.log(`Area of Circle: ${circle.getArea()}`); // Output: Area of Circle: 78.53981633974483

const square = new Square(4);
console.log(Square.getType()); // Output: Square
console.log(`Area of Square: ${square.getArea()}`); // Output: Area of Square: 16

console.log(`Total Shapes: ${Shape.totalShapes}`); // Output: Total Shapes: 2

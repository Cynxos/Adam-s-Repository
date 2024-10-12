import { Shape } from './Shape';

export class Circle extends Shape {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    static getType(): string {
        return "Circle";
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

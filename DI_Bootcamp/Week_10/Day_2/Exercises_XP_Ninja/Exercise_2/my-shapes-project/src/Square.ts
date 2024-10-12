import { Shape } from './Shape';

export class Square extends Shape {
    private side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    static getType(): string {
        return "Square";
    }

    getArea(): number {
        return this.side * this.side;
    }
}

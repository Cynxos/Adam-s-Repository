export class Shape {
    static totalShapes: number = 0;

    constructor() {
        Shape.totalShapes++;
    }

    static getType(): string {
        return "Generic Shape";
    }
}

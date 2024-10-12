import { Shape } from './Shape';

export interface Rectangle extends Shape {
    readonly width: number;
    readonly height: number;
    getPerimeter(): number;
}

export class RectangleImpl implements Rectangle {
    color: string;
    readonly width: number;
    readonly height: number;

    constructor(color: string, width: number, height: number) {
        this.color = color;
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

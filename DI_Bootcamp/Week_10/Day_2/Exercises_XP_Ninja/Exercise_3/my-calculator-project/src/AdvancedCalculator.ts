import { Calculator } from './Calculator';

export class AdvancedCalculator implements Calculator {
    public a: number;
    public b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    public operate(operation: (a: number, b: number) => number): number {
        return operation(this.a, this.b);
    }

    public add(): number {
        return this.operate((a, b) => a + b);
    }

    public subtract(): number {
        return this.operate((a, b) => a - b);
    }

    public multiply(): number {
        return this.operate((a, b) => a * b);
    }
}

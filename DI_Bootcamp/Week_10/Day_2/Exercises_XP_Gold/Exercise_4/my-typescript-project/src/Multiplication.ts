import { Operation } from './Operation';

export class Multiplication implements Operation {
    public performOperation(a: number, b: number): number {
        return a * b;
    }
}

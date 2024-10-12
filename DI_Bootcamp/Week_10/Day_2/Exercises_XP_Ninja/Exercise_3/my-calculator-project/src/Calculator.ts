export interface Calculator {
    a: number;
    b: number;
    operate(operation: (a: number, b: number) => number): number;
}

import { Device } from './Device';

export class Laptop extends Device {
    public model: string;
    public price: number;

    constructor(serialNumber: string, model: string, price: number) {
        super(serialNumber);
        this.model = model;
        this.price = price;
    }

    public getInfo(): string {
        return `Serial Number: ${this.serialNumber}, Model: ${this.model}, Price: ${this.price}`;
    }
}

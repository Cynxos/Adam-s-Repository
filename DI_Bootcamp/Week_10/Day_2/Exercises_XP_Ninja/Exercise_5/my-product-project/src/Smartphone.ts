import { Electronics } from './Electronics';

export class Smartphone implements Electronics {
    readonly name: string;
    price: number;
    discount?: number;
    warrantyPeriod: number;

    constructor(name: string, price: number, warrantyPeriod: number, discount?: number) {
        this.name = name;
        this.price = price;
        this.warrantyPeriod = warrantyPeriod;
        if (discount) this.discount = discount;
    }

    public getPriceAfterDiscount(): number {
        if (this.discount) {
            return this.price - (this.price * (this.discount / 100));
        }
        return this.price;
    }
}

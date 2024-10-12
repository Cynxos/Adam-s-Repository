class Product {
    readonly id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public getProductInfo(): string {
        return `Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
    }
}

const product = new Product(1, "Laptop", 999.99);
console.log(product.getProductInfo()); // Output: Name: Laptop, Price: $999.99

import { User, Product, Order } from './types';

export function handleData(data: (User | Product | Order)[]): string[] {
    return data.map(item => {
        switch (item.type) {
            case 'user':
                return `Hello, ${item.name}! You are ${item.age} years old.`;
            case 'product':
                return `Product ID: ${item.id}, Price: $${item.price}`;
            case 'order':
                return `Order ID: ${item.orderId}, Amount: $${item.amount}`;
            default:
                return 'Unknown item type';
        }
    });
}

import { handleData } from './handleData';
import { User, Product, Order } from './types';

const data: (User | Product | Order)[] = [
    { type: 'user', name: 'Alice', age: 30 },
    { type: 'product', id: 101, price: 29.99 },
    { type: 'order', orderId: 'ORD123', amount: 100.50 },
];

const results = handleData(data);
results.forEach(result => console.log(result));

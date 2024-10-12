import { Smartphone } from './Smartphone';

const myPhone = new Smartphone("iPhone", 1000, 24, 10);
console.log(`Name: ${myPhone.name}, Price: ${myPhone.getPriceAfterDiscount()}, Warranty Period: ${myPhone.warrantyPeriod} months`); 
// Output: Name: iPhone, Price: 900, Warranty Period: 24 months

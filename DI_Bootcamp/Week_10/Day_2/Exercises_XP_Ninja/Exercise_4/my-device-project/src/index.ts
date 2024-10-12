import { Laptop } from './Laptop';

const myLaptop = new Laptop("123-456-789", "MacBook Pro", 2500);
console.log(myLaptop.getInfo()); // Output: Serial Number: 123-456-789, Model: MacBook Pro, Price: 2500

myLaptop.model = "MacBook Air";
myLaptop.price = 2000;
console.log(myLaptop.getInfo()); // Output: Serial Number: 123-456-789, Model: MacBook Air, Price: 2000

function changeEnough(itemPrice, amountOfChange) {
    const quarters = 0.25;
    const dimes = 0.10;
    const nickels = 0.05;
    const pennies = 0.01;
    
    const totalChange = (amountOfChange[0] * quarters +
                         amountOfChange[1] * dimes +
                         amountOfChange[2] * nickels +
                         amountOfChange[3] * pennies);
    
    return totalChange >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); 
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

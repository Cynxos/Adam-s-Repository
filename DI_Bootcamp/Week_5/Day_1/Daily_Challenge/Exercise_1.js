const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

displayGroceries();

const cloneGroceries = () => {
    let user = client;
    
    client = "Betty";
    console.log("Client:", client); 
    console.log("User:", user);

    let shopping = groceries;
    
    shopping.totalPrice = "35$";
    console.log("Groceries totalPrice:", groceries.totalPrice); 

    shopping.other.paid = false;
    console.log("Groceries paid:", groceries.other.paid); 
};

cloneGroceries();

function hotelCost(nights) {
    const costPerNight = 140;
    return nights * costPerNight;
}

function planeRideCost(destination) {
    if (destination === "London") {
        return 183;
    } else if (destination === "Paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost(days) {
    const costPerDay = 40;
    let totalCost = days * costPerDay;
    if (days > 10) {
        totalCost *= 0.95;
    }
    return totalCost;
}

function totalVacationCost() {
    let nights, destination, days;

    while (true) {
        nights = prompt("How many nights would you like to stay in the hotel?");
        if (!isNaN(nights) && nights !== "") {
            nights = Number(nights);
            break;
        }
    }

    while (true) {
        destination = prompt("What is your destination?");
        if (typeof destination === "string" && destination.trim() !== "") {
            break;
        }
    }

    while (true) {
        days = prompt("How many days would you like to rent the car?");
        if (!isNaN(days) && days !== "") {
            days = Number(days);
            break;
        }
    }

    const hotelCostTotal = hotelCost(nights);
    const planeRideCostTotal = planeRideCost(destination);
    const rentalCarCostTotal = rentalCarCost(days);

    const totalCost = hotelCostTotal + planeRideCostTotal + rentalCarCostTotal;

    console.log(`The car cost: $${rentalCarCostTotal}, the hotel cost: $${hotelCostTotal}, the plane tickets cost: $${planeRideCostTotal}.`);
    console.log(`Total vacation cost: $${totalCost}`);
    return totalCost;
}

totalVacationCost();

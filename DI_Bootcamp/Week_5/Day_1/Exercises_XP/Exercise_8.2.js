function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        const message = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        document.getElementById('juice-order').innerHTML = `<p>${message}</p>`;
    }

    addIngredients('apple', 'banana', 'orange');
    addIngredients('mango', 'pineapple', 'strawberry');

    displayJuice();
}

makeJuice('large');

function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        const message = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
        document.getElementById('juice-order').innerHTML = `<p>${message}</p>`;
    }
    addIngredients('apple', 'banana', 'orange');
}

makeJuice('large');

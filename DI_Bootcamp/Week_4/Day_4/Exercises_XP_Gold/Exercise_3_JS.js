let shoppingList = [];

function createForm() {
    const root = document.getElementById('root');

    const form = document.createElement('form');
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'itemInput';
    const addButton = document.createElement('input');
    addButton.type = 'button';
    addButton.value = 'AddItem';
    addButton.onclick = addItem;

    form.appendChild(input);
    form.appendChild(addButton);

    const clearButton = document.createElement('input');
    clearButton.type = 'button';
    clearButton.value = 'ClearAll';
    clearButton.onclick = clearAll;

    root.appendChild(form);
    root.appendChild(clearButton);
}

function addItem() {
    const input = document.getElementById('itemInput');
    const item = input.value.trim();
    if (item) {
        shoppingList.push(item);
        input.value = '';
        console.log(shoppingList);
    }
}

function clearAll() {
    shoppingList = [];
    console.log(shoppingList);
}

createForm();

import products from './products.js';

function findProductByName(productName) {
    return products.find(product => product.name === productName);
}

const productNames = ['Laptop', 'Phone', 'Shirt', 'Shoes'];

productNames.forEach(name => {
    const product = findProductByName(name);
    if (product) {
        console.log(`Product: ${product.name}, Price: $${product.price}, Category: ${product.category}`);
    } else {
        console.log(`Product with name "${name}" not found.`);
    }
});

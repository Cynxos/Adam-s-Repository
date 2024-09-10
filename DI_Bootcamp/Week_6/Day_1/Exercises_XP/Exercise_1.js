function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve('The number is less than or equal to 10');
        } else {
            reject('The number is greater than 10');
        }
    });
}

compareToTen(5)
    .then(message => console.log(message))
    .catch(error => console.log(error));

compareToTen(15)
    .then(message => console.log(message))
    .catch(error => console.log(error)); 
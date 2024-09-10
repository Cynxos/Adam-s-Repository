function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (words.every(word => typeof word === 'string')) {
            resolve(words.map(word => word.toUpperCase()));
        } else {
            reject('All items in the array must be strings.');
        }
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            resolve(words.sort());
        } else {
            reject('Array length must be greater than 4.');
        }
    });
}

makeAllCaps(['hello', 'world', 'javascript'])
    .then(uppercasedWords => sortWords(uppercasedWords))
    .then(sortedWords => console.log(sortedWords))
    .catch(error => console.error(error));

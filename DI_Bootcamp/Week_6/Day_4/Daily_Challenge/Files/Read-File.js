const fs = require('fs');
const path = './files/File-Data.txt';

function readFile() {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

module.exports = readFile;

const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading source.txt:', err);
        return;
    }
    fs.writeFile('destination.txt', data, (err) => {
        if (err) {
            console.error('Error writing destination.txt:', err);
            return;
        }
        console.log('Content copied to destination.txt');
    });
});

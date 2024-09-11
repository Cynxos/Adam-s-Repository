import { readFile, writeFile } from './fileManager.js';

async function main() {
    try {
        const data = await readFile('Hello World.txt');
        console.log('File content:', data);
        await writeFile('Bye World.txt', 'Writing to the file');
        console.log('Successfully wrote to the file');
    } catch (err) {
        console.error('Error:', err);
    }
}

main();

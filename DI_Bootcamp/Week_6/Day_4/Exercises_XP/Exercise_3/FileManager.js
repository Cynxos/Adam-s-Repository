import { promises as fs } from 'fs';

export async function readFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data;
    } catch (err) {
        throw err;
    }
}

export async function writeFile(filePath, content) {
    try {
        await fs.writeFile(filePath, content, 'utf8');
    } catch (err) {
        throw err;
    }
}

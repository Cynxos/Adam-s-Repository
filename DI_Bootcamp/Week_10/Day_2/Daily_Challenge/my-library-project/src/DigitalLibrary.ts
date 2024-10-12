import { Library } from './Library';
import { Book } from './Book';

export class DigitalLibrary extends Library {
    readonly website: string;

    constructor(website: string) {
        super();
        this.website = website;
    }

    public listBooks(): string[] {
        return this.books.map(book => book.title);
    }
}

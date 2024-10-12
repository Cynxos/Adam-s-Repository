import { Book } from './Book';

export class Library {
    protected books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public getBookDetails(isbn: string): Book | undefined {
        return this.books.find(book => book.isbn === isbn);
    }
}

import { DigitalLibrary } from './DigitalLibrary';
import { Book } from './Book';

const myDigitalLibrary = new DigitalLibrary("http://www.mylibrary.com");

// Adding books
const book1: Book = { title: "Book One", author: "Author One", isbn: "111", publishedYear: 2001, genre: "Fiction" };
const book2: Book = { title: "Book Two", author: "Author Two", isbn: "222", publishedYear: 2002 };

myDigitalLibrary.addBook(book1);
myDigitalLibrary.addBook(book2);

// Fetching book details
console.log(myDigitalLibrary.getBookDetails("111")); // Details of Book One
console.log(myDigitalLibrary.getBookDetails("222")); // Details of Book Two

// Listing all book titles
console.log(myDigitalLibrary.listBooks()); // Output: ["Book One", "Book Two"]

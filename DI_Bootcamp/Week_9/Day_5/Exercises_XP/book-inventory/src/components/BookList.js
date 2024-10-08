import React from 'react';
import { useSelector } from 'react-redux';
import { selectBooks, selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from '../redux/booksSlice';

const BookList = ({ genre }) => {
  const books = useSelector((state) => {
    switch (genre) {
      case 'Horror':
        return selectHorrorBooks(state);
      case 'Fantasy':
        return selectFantasyBooks(state);
      case 'Science Fiction':
        return selectScienceFictionBooks(state);
      default:
        return selectBooks(state);
    }
  });

  return (
    <div>
      <h2>{genre} Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

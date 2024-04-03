// src/components/SearchResults.js

import React from "react";
import "./SearchResults.css";

const SearchResults = ({ books, openDetailModal }) => {
  return (
    <div className="search-results">
      {books.map((book) => (
        <div
          key={book.id}
          className="book-result"
          onClick={() => openDetailModal(book)}>
          <img
            src={
              book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
            }
            alt={book.volumeInfo.title}
          />
          <div>
            <h2>{book.volumeInfo.title}</h2>
            <p>
              {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;

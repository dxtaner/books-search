// src/components/BookSearch.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBooks } from "../redux/actions";
import BookDetailModal from "./BookDetailModal.js";
import SearchResults from "./SearchResults.js";
import "./BookSearch.css";

const BookSearch = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      const data = await response.json();

      if (data.items) {
        dispatch(setBooks(data.items));
        setSelectedBook(null);
      } else {
        dispatch(setBooks([]));
      }
    } catch (error) {
      console.error("API Hatası:", error);
    }
  };

  const openDetailModal = (book) => {
    setSelectedBook(book);
  };

  const closeDetailModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="book-search-container">
      <div className="search-input-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <SearchResults books={books} openDetailModal={openDetailModal} />

      {selectedBook && (
        <BookDetailModal
          isOpen={!!selectedBook}
          closeModal={closeDetailModal}
          book={selectedBook}
        />
      )}
    </div>
  );
};

export default BookSearch;

// src/components/BookDetailModal.js

import React from "react";
import Modal from "react-modal";
import "./BookDetailModal.css";

const BookDetailModal = ({ isOpen, closeModal, book }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Book Detail Modal">
      <h2>{book.volumeInfo.title}</h2>
      <div className="book-detail-content">
        <div className="book-image">
          <img
            src={
              book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
            }
            alt={book.volumeInfo.title}
          />
        </div>
        <div className="book-info">
          <p>
            Yazar:{" "}
            {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
          </p>
          <p>Sayfa Sayısı: {book.volumeInfo.pageCount}</p>
          <p>Yayın Tarihi: {book.volumeInfo.publishedDate}</p>
          <p>
            Kategori:{" "}
            {book.volumeInfo.categories &&
              book.volumeInfo.categories.join(", ")}
          </p>
          <p>Dil: {book.volumeInfo.language}</p>
          <p>
            <strong>Önizleme Linki:</strong>{" "}
            <a
              href={book.volumeInfo.previewLink}
              target="_blank"
              rel="noopener noreferrer">
              Önizleme
            </a>
          </p>
          <p>
            <strong>Google Books Linki:</strong>{" "}
            <a
              href={book.volumeInfo.infoLink}
              target="_blank"
              rel="noopener noreferrer">
              Google Books
            </a>
          </p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={closeModal}>Kapat</button>
      </div>
    </Modal>
  );
};

export default BookDetailModal;

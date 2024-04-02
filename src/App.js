// src/App.js

import React from "react";
import BookSearch from "./components/BookSearch";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Book Search App</h1>
      <BookSearch />

      {/* Footer */}
      <footer className="app-footer">
        <p>
          Developed by{" "}
          <a
            href="https://github.com/dxtaner"
            target="_blank"
            rel="noopener noreferrer">
            dxtaner
          </a>{" "}
          | LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/tanerozer16/"
            target="_blank"
            rel="noopener noreferrer">
            tanerozer16
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;

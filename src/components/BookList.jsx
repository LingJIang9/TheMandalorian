import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../API";
import "../App";
import "./BookList.css";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="browse-book-card">
          <div className="book-image">
            <img src={book.image_url} alt="#" />
          </div>
          <div className="book-title">
            <p>{book.title}</p>
          </div>
          <div className="button">
            <button>Want to read</button>
            <button>Reading</button>
            <button>Have Read</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;

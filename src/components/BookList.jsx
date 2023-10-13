import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../API";
import "../App";
import "./BookList.css";
import { useAppContext } from "./context/appContext";
import BookData from "./BookData";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { haveread, addToHaveread, removeFromHaveread } = useAppContext();
  const { toread, addToToread, removeFromToread } = useAppContext();
  const { reading, addToReading, removeFromReading } = useAppContext();

  console.log("have read list is", haveread);
  console.log("to read list is", toread);
  console.log("reading list is", reading);

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
            <button
              onClick={() => {
                addToToread(book);
              }}
            >
              To read
            </button>
            <button
              onClick={() => {
                addToReading(book);
              }}
            >
              Reading
            </button>
            <button
              onClick={() => {
                addToHaveread(book);
              }}
            >
              Have Read
            </button>
          </div>
        </div>
      ))}
      <BookData />
    </div>
  );
};

export default BookList;

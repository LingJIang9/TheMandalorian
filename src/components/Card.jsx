import React from "react";
import "../components/Book.css";

function Card({ item }) {
  return (
    <div className="book-card">
      {item.map((val) => (
        <div key={val.id} className="b-card">
          <div className="b-image">
            <img src={val.img} alt="" />
          </div>
          <div className="card-body">
            <div className="card-title">{val.title}</div>
          </div>
          <div className="card-text">{val.text}</div>
        </div>
      ))}
    </div>
  );
}

export default Card;

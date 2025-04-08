// write the book component code here
import React from "react";

const BookCard = ({ title, author, year, description }) => {
  return (
    <div className="book-card">
      <h2 className="book-title">{title}</h2>
      <p className="book-author">by {author}</p>
      <p className="book-year">Published: {year}</p>
      <p className="book-description">{description}</p>
    </div>
  );
};

export default BookCard;

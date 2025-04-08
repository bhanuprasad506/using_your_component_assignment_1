import React from "react";
import BookCard from "./components/bookcard";
import "./App.css";

const App = () => {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      description:
        "A novel set in the Roaring Twenties that tells the story of Jay Gatsby's unrequited love.",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      description:
        "A dystopian novel set in a totalitarian regime with constant surveillance.",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      description:
        "A powerful story of racial injustice in the American Deep South.",
    },
  ];

  return (
    <div className="app">
      <h1 className="app-title">Digital Library</h1>
      <div className="book-list">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            year={book.year}
            description={book.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

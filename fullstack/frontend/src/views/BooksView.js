import { useEffect, useState } from "react";
import axios from 'axios';


const BooksView = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  })

  const getBooks = async () => { 
    const response = await axios.get('http://localhost:5000/api/books');
    setBooks(response.data)
  }

  return (
    <div className="container mt-5">
      <h2>Books View</h2>
      {books.map(book => (
        <>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.pages}</p>
        <p>{book.genre}</p>
        </>
      ))}
    </div>
  )
}

export default BooksView;
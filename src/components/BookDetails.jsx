import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BookDetails.css'; // Import the CSS

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const books = useSelector((state) => state.books.books);
    const book = books.find((book) => book.id === parseInt(id));

    if (!book) {
        return <p>Book not found!</p>;
    }

    return (
        <div className="bookDetailsContainer">
            <h1>{book.title}</h1>
            <img src={book.cover_image} alt={book.title} />
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
            <button onClick={() => navigate('/browse')}>Back to Browse</button>
        </div>
    );
};

export default BookDetails;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/booksSlice';
import { Link } from 'react-router-dom';
import './Home.css'; // Import as a global stylesheet

const Home = () => {
    const dispatch = useDispatch();
    const { books, loading, error } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="homeContainer">
            <h1 className="welcomeMessage">Welcome to the Online Library</h1>

            <div className="popularBooksSection">
                <h2>Popular Books</h2>
                <div className="bookList">
                    {books.length === 0 ? (
                        <p>No books available.</p>
                    ) : (
                        books.map((book) => (
                            <div key={book.id} className="bookCard">
                                <img src={book.cover_image} alt={book.title} className="bookImage" />
                                <h3 className="bookTitle">{book.title}</h3>
                                <p className="bookAuthor">Author: {book.author}</p>
                                <Link to={`/book/${book.id}`} className="viewDetails">
                                    View Details
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;

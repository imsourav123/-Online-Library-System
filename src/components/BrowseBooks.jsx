import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './BrowseBooks.css'; // Import the CSS

const BrowseBooks = () => {
    const books = useSelector((state) => state.books.books);
    const [category, setCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter books based on category and search query
    const filteredBooks = books.filter((book) => {
        const matchesCategory = category ? book.genre.toLowerCase() === category.toLowerCase() : true;
        const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="browseBooksContainer">
            <h1>Browse Books</h1>

            <div className="searchBar">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    {/* Add other categories here */}
                </select>
            </div>

            <div className="bookList">
                {filteredBooks.length === 0 ? (
                    <p>No books available.</p>
                ) : (
                    filteredBooks.map((book) => (
                        <div key={book.id} className="bookCard">
                            <img src={book.cover_image} alt={book.title}/>
                            <h3>{book.title}</h3>
                            <p>Author: {book.author}</p>
                            <Link to={`/book/${book.id}`}>View Details</Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default BrowseBooks;

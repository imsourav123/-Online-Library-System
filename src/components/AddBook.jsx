import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';  // For redirection
import { addBook } from '../redux/booksSlice';
import './AddBook.css';  // Import the CSS

const AddBook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',
        description: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.title) newErrors.title = 'Title is required';
        if (!formData.author) newErrors.author = 'Author is required';
        if (!formData.genre) newErrors.genre = 'Genre is required';
        if (!formData.description) newErrors.description = 'Description is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            dispatch(addBook(formData));  // Add book to Redux state
            navigate('/browse');  // Redirect to Browse Books page
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="addBookContainer">
            <h2>Add New Book</h2>
            <form className="addBookForm" onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                    {errors.title && <p className="errorText">{errors.title}</p>}
                </div>

                <div>
                    <label>Author:</label>
                    <input type="text" name="author" value={formData.author} onChange={handleChange} />
                    {errors.author && <p className="errorText">{errors.author}</p>}
                </div>

                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" value={formData.genre} onChange={handleChange} />
                    {errors.genre && <p className="errorText">{errors.genre}</p>}
                </div>

                <div>
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} />
                    {errors.description && <p className="errorText">{errors.description}</p>}
                </div>

                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;

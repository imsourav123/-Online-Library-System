import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [],
    loading: false,
    error: null,
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
            state.loading = false;
        },
        setLoading: (state) => {
            state.loading = true;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
    },
});

// Export actions
export const { setBooks, setLoading, setError, addBook } = booksSlice.actions;

// Fetch books from API
export const fetchBooks = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const response = await fetch('https://www.freetestapi.com/api/v1/books');
        const data = await response.json();
        // console.log('Fetched Books:', data); // Log the response to check its structure
        dispatch(setBooks(data));
    } catch (error) {
        dispatch(setError('Failed to load books'));
        console.error('Error fetching books:', error);
    }
};

export default booksSlice.reducer;

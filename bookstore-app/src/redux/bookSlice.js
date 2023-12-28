import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// src/redux/bookSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: { books: [], isLoading: false },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    deleteBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    },
    // Add more reducers as needed.
  },
});

export const { setBooks, setLoading, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;


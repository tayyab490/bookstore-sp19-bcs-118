
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [], // Initial state: an empty array for categories
};

const categorySlice = createSlice({
  name: 'categories',
  initialState, // Initial state defined above
  reducers: {
    // Reducer that always returns "under construction"
    getCategoryStatus: (state) => {
      state.categories = 'under construction';
    },
  },
});

export const { getCategoryStatus } = categorySlice.actions;
export default categorySlice.reducer;

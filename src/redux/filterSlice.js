import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    category: "",
    priceRange: [0, 1000],
    sortBy: "newest",
    currentPage: 1,
    itemsPerPage: 12,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.currentPage = 1;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
      state.currentPage = 1;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetFilters: (state) => {
      state.category = "";
      state.priceRange = [0, 1000];
      state.sortBy = "newest";
      state.currentPage = 1;
    },
  },
});

export const { setCategory, setPriceRange, setSortBy, setCurrentPage, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;

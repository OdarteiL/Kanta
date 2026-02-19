import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  category: string;
  priceRange: [number, number];
  sortBy: "newest" | "price_asc" | "price_desc" | "rating";
  currentPage: number;
  itemsPerPage: number;
}

const initialState: FilterState = {
  category: "",
  priceRange: [0, 1000],
  sortBy: "newest",
  currentPage: 1,
  itemsPerPage: 12,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.currentPage = 1;
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
      state.currentPage = 1;
    },
    setSortBy: (state, action: PayloadAction<FilterState["sortBy"]>) => {
      state.sortBy = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
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

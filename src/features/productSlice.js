import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("https://dummyjson.com/products?limit=194");
    return res.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    sorted: [],
    loading: false,
    searchQuery: "",
    currentPage: 1,
    itemsPerPage: 9,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    sortLowToHigh: (state) => {
      state.sorted.sort((a, b) => a.price - b.price);
    },
    sortHighToLow: (state) => {
      state.sorted.sort((a, b) => b.price - a.price);
    },
    resetSort: (state) => {
      state.sorted = [...state.products];
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.sorted = action.payload;
      });
  },
});

export const { setSearchQuery, sortLowToHigh, sortHighToLow, resetSort, setPage } =
  productSlice.actions;
export default productSlice.reducer;

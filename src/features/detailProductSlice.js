import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDeatailProduct = createAsyncThunk(
    "detailProducts/fetchDetailProducts",
    async (id) => {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        return res.data;
    }
);

const detailProductsSlice = createSlice({
    name: "detailProducts",
    initialState: {
        product: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearProduct: (state) => {
            state.product = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDeatailProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDeatailProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(fetchDeatailProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearProduct } = detailProductsSlice.actions;
export default detailProductsSlice.reducer;

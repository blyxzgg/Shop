import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWomensDresses = createAsyncThunk(
    "arrivals/fetchWomensDresses",
    async () => {
        const response = await axios.get("https://dummyjson.com/products/category/womens-dresses");
        return response.data.products;
    }
);

export const fetchMensShirts = createAsyncThunk(
    "arrivals/fetchMensShirts",
    async () => {
        const response = await axios.get("https://dummyjson.com/products/category/mens-shirts");
        return response.data.products;
    }
);

const arrivalsSlice = createSlice({
    name: "arrivals",
    initialState: {
        dresses: [],
        shirts: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWomensDresses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWomensDresses.fulfilled, (state, action) => {
                state.loading = false;
                state.dresses = action.payload;
            })
            .addCase(fetchWomensDresses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        builder
            .addCase(fetchMensShirts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMensShirts.fulfilled, (state, action) => {
                state.loading = false;
                state.shirts = action.payload;
            })
            .addCase(fetchMensShirts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default arrivalsSlice.reducer;

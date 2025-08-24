import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/productSlice";
import detailsProductReducer from "../features/detailProductSlice"
import arrivalsReducer from "../features/arrivalsSlice"

export const store = configureStore({
    reducer: {
        products: productsReducer,
        detailsProduct: detailsProductReducer,
        arrivals: arrivalsReducer
    },
});

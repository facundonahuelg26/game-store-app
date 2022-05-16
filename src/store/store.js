import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/login";
import cartReducer from "./slices/cart";
import shippingReducer from "./slices/shipping";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer,
        shipping: shippingReducer,
    },
});


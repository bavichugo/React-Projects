import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import counterReducer from "./counter-slice";

const store = configureStore({
    reducer: {
        counter: counterReducer, // Two different ways to use reducers
        auth: authSlice.reducer
    },
});

export default store;
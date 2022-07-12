import { configureStore } from "@reduxjs/toolkit";
import welcomeReducer from "./welcome-slice";

const store = configureStore({
    reducer: {
        welcome: welcomeReducer
    }
});

export default store;
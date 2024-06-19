import { configureStore } from "@reduxjs/toolkit";
import darkReducer from "./slices/darkSlice";

const store = configureStore({
    reducer: {
        dark: darkReducer
    }
})

export default store
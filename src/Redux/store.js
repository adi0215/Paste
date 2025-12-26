import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "./Slices/pasteslice.jsx";
export const store=configureStore({
    reducer:{
        paste:pasteReducer
    }
})

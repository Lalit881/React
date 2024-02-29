import { configureStore } from "@reduxjs/toolkit";
import slice from "./Slice";

export const Store = configureStore({
    reducer:{
        counter : slice,
    }
})
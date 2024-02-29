import { configureStore } from "@reduxjs/toolkit";
import { ReducerFun } from "./reducer";


export const store = configureStore({
    reducer:{count:ReducerFun}
})
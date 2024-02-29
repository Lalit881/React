import { configureStore } from "@reduxjs/toolkit";
import { reducerFun } from "./reducer";



export const store123 = configureStore({
    reducer:{x:reducerFun}//12
})
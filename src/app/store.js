import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import postSlice from "../features/postSlice";


const store = configureStore({
    reducer : {
        counterRe : counterSlice,
        postsRe: postSlice
    }
})

export default store;
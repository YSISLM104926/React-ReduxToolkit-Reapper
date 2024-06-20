import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";


const store = configureStore({
    reducer : {
        counterRe : counterSlice
    }
})

export default store;
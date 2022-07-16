import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../feature/list.slice";


export default configureStore({
    reducer : {
       todos: listReducer,
    } 
})
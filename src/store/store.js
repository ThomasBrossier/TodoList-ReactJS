import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../feature/list.slice";
import errorReducer from "../feature/error.slice";


export default configureStore({
    reducer : {
       todos: listReducer,
       errors : errorReducer,
    } 
})
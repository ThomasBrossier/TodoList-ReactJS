import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../feature/todoList.slice";

export default configureStore({
    reducer : {
        data : todoListReducer
    }
})
import { createSlice } from "@reduxjs/toolkit";
import { datas } from "../fakedata";
export const todoListSlice = createSlice({
    name : "Lists",
    initialState :{
                   errors : [],
                   isLoaded : false
                 } ,
    reducers : {
        loaded : (state, action)=>{
            state.isLoaded = action.payload
        },
        addErrors : (state, action)=>{
            state.errors = action.payload
        }
    }
})

export const {loaded,addLists,addList,removeList,updateList,incrementIdList,setCurrentList,addTask,updateTask,removeTask, toggleTask} = todoListSlice.actions;
export default todoListSlice.reducer
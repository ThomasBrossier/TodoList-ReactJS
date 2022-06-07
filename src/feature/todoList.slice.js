import { createSlice } from "@reduxjs/toolkit";
import { datas } from "../fakedata";
export const todoListSlice = createSlice({
    name : "Lists",
    initialState :datas ,
    reducers : {
        callDatas : (state, action)=>{
            state.data = action.payload
        },
        addList : (state, action)=>{
            state.lists.push(action.payload);
        },
        removeList :(state,action)=>{
            state.lists = state.lists.filter((list)=>list.id !== action.payload)
        },
        incrementIdList :(state)=>{
            state.idListCount++
        },
        setCurrentList : (state, action)=>{
            state.currentList = action.payload;
        },
        addTask : (state, action)=>{
            const index = state.lists.findIndex((list)=> list.id === action.payload.id)
            state.lists[index].tasks.push(action.payload.task)
        },
        removeTask : (state,action)=>{
            const index = state.lists.findIndex((list)=> list.id === action.payload.idList)
            state.lists[index].tasks = state.lists[index].tasks.filter(task=> task.id !== action.payload.idTask)
        }
    }
})

export const {callDatas,addList,removeList,incrementIdList,setCurrentList,addTask,removeTask} = todoListSlice.actions;
export default todoListSlice.reducer
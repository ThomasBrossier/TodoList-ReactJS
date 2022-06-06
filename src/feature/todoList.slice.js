import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name : "todoListSlice",
    initialState :{},
    reducers : {
        callDatas : (state, action)=>{
            state.data = action.payload
        },
        addList : (state, action)=>{
            state.data.lists.push(action.payload);
        },
        removeList :(state,action)=>{
            state.data.lists.filter((list)=>list.id !== action.payload)
        }
    }
})

export const {callDatas,addList,removeList} = todoListSlice.actions;
export default todoListSlice.reducer
import { createSlice ,current} from "@reduxjs/toolkit";
import { datas } from "../fakedata";
export const todoListSlice = createSlice({
    name : "Lists",
    initialState :{lists : [], idListCount : 1} ,
    //datas
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
        } 
    }
})

export const {callDatas,addList,removeList,incrementIdList} = todoListSlice.actions;
export default todoListSlice.reducer
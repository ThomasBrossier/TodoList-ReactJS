import { createSlice } from "@reduxjs/toolkit";
import { datas } from "../fakedata";
export const todoListSlice = createSlice({
    name : "Lists",
    initialState :{
                   lists :[],
                   errors : [],
                   isLoaded : false
                 } ,
    reducers : {
        loaded : (state, action)=>{
            state.isLoaded = action.payload
        },
        addList : (state, action)=>{
            state.lists.push(action.payload);
        },
        addLists : (state, action)=>{
            state.lists = action.payload ;
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
            if(!state.lists[index].tasks){
                state.lists[index].tasks = [];
            }
            state.lists[index].tasks.push(action.payload.task)
        },
        removeTask : (state,action)=>{
            const index = state.lists.findIndex((list)=> list.id === action.payload.idList)
            state.lists[index].tasks = state.lists[index].tasks.filter(task=> task.id !== action.payload.idTask)
        },
        toggleTask : (state, action)=>{
            const indexList = state.lists.findIndex((list)=> list.id === action.payload.idList)
            const indexTask = state.lists[indexList].tasks.findIndex((task => task.id === action.payload.idTask))
            state.lists[indexList].tasks[indexTask].done = !state.lists[indexList].tasks[indexTask].done;
        }
    }
})

export const {loaded,addLists,addList,removeList,incrementIdList,setCurrentList,addTask,removeTask, toggleTask} = todoListSlice.actions;
export default todoListSlice.reducer
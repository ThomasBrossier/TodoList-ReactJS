import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name : "Lists",
    initialState : {
        lists : [] ,
        isLoaded:false                  
    },
    reducers : {
        loaded : (state, action)=>{
            state.isLoaded = action.payload
        },
        addList : (state, action)=>{
            state.lists.push(action.payload);
        },
        importLists : (state, action)=>{
            state.lists = action.payload ;
        },
        updateList : (state, action)=>{
            const index = state.lists.findIndex((list)=> list.id === action.payload.idList)
            state.lists[index].title = action.payload.title ;
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
        updateTask : (state,action)=>{
            const index = state.lists.findIndex((list)=> list.id === action.payload.idList)
            const taskIndex = state.lists[index].tasks.findIndex((task)=> task.id === action.payload.idTask)
            state.lists[index].tasks[taskIndex].title =  action.payload.title;
        },
        toggleTask : (state, action)=>{
            const indexList = state.lists.findIndex((list)=> list.id === action.payload.idList)
            const indexTask = state.lists[indexList].tasks.findIndex((task => task.id === action.payload.idTask))
            state.lists[indexList].tasks[indexTask].done = !state.lists[indexList].tasks[indexTask].done;
        }
    }
})

export const {loaded, importLists,addList,removeList,updateList,incrementIdList,setCurrentList,addTask,updateTask,removeTask, toggleTask} = listSlice.actions;
export default listSlice.reducer
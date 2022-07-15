import { createSlice } from "@reduxjs/toolkit";


export const errorSlice = createSlice({
    name : "Lists",
    initialState : [],
    reducers : {
        addErrors : (state, action)=>{
            state.errors = action.payload
        }
    }
})

export const {addErrors} = errorSlice.actions;
export default errorSlice.reducer
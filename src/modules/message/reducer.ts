
import { createSlice } from '@reduxjs/toolkit';
import { actionMessageGets } from './action';
import { TypeMessageReducer } from './type';



const initialState:TypeMessageReducer ={
    messages:[]
}


export const messageSlice =createSlice({
    name:"message",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
         // gets
    builder.addCase(
        actionMessageGets.fulfilled,
        (state, { meta, payload, type }) => {
        state.messages=payload.data
        }
      );
      builder.addCase(
        actionMessageGets.rejected,
        (state, { meta, payload, type, error }) => {
            console.log(payload,error)
        }
      );
    }
})


export const {}=messageSlice.actions
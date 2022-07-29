import { createSlice } from "@reduxjs/toolkit";
import { actionTransactionGets } from "./actions";
import { TypeTransactionState } from "./type";

const initialState: TypeTransactionState = {
  transactions: [],
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  //basic reducert
  reducers: {},

  //server reducer
  extraReducers: (builder) => {
    //gets 
    builder.addCase(
      actionTransactionGets.fulfilled,
      (state, { meta, payload, type }) => {
       state.transactions=payload.data
      }
    );
    builder.addCase(
        actionTransactionGets.rejected,
        (state, { meta, payload, type,error }) => {
          console.log(meta, payload, type,error);
        }
      );
  },
});


export const {} =transactionSlice.actions

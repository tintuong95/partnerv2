import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTransactionGets } from "./api";
import { TypePayloadGets } from "./type";

const actionTransactionGets = createAsyncThunk(
  "transaction/gets",
  async (payload: TypePayloadGets) => {
    return await fetchTransactionGets(payload);
  }
);

export { actionTransactionGets };

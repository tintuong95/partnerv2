import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMessageGets } from "./api";
import { TypeGetsPayload } from "./type";


const actionMessageGets =createAsyncThunk(
    "message/gets",
    async (payload:TypeGetsPayload)=>{
        return await fetchMessageGets(payload)
    }
)


export {actionMessageGets}
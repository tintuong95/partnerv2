import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNewsCreate, fetchNewsGet, fetchNewsGets, fetchNewsRemove, fetchNewsUpdate } from "./api";

const actionNewsCreate = createAsyncThunk(
  "news/create",
  async (payload: FormData, thunkApi) => {
    return await fetchNewsCreate(payload);
  }
);

const actionNewsUpdateId=createAsyncThunk(
    "news/update",
    async (payload:any,thunkApi)=>{
        return await fetchNewsUpdate(payload)
    }
)

const actionNewsGets = createAsyncThunk(
    "news/gets",
     async (payload:any,thunkApi) => {
  return await fetchNewsGets(payload);
});

const actionNewsRemove = createAsyncThunk(
  "news/removeById",
  async (payload: any, thunkApi) => {
    const resRemove = await fetchNewsRemove(payload.id);
    thunkApi.dispatch(actionNewsGets(payload.refesh));

    return resRemove;
  }
);

const actionNewsGet=createAsyncThunk(
    "news/getId",
    async (payload:string,thunkApi)=>{
        return await fetchNewsGet(payload)
    }
)

export {actionNewsUpdateId, actionNewsGets, actionNewsCreate, actionNewsRemove,actionNewsGet };

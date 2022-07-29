import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProductCreate,
  fetchProductDelete,
  fetchProductGet,
  fetchProductGets,
  fetchProductState,
  fetchProductUpdate,
} from "./api";
import { TypeQueryGetProduct, TypeUpdatePayload } from "./type";

const actionProductCreate = createAsyncThunk(
  "product/create",
  async (payload: FormData, thunkAPI) => {
    return await fetchProductCreate(payload);
  }
);

const actionProductUpdate = createAsyncThunk(
  "product/update",
  async ({id,data}: TypeUpdatePayload, thunkAPI) => {
    console.log("hihi")
    return await fetchProductUpdate(id,data);
  }
);

const actionProductGets = createAsyncThunk(
  "product/gets",
  async (payload: TypeQueryGetProduct, thunkAPI) => {
    return await fetchProductGets(payload);
  }
);

const actionProductGet = createAsyncThunk(
  "product/get",
  async (payload: string, thunkAPI) => {
    return await fetchProductGet(payload);
  }
);

const actionProductDelete = createAsyncThunk(
  "product/delete",
  async (payload:any, thunkAPI) => {
    const resRemove = await fetchProductDelete(payload.id)
    thunkAPI.dispatch(actionProductGets(payload.refesh))
    return resRemove ;
  }
);

const actionProductState = createAsyncThunk(
  "product/state",
  async (payload: string, thunkAPI) => {
    return await fetchProductState(payload);
  }
);

export {
  actionProductCreate,
  actionProductGets,
  actionProductDelete,
  actionProductState,
  actionProductUpdate,
  actionProductGet,
};

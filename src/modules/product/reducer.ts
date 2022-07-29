import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import {
  actionProductCreate,
  actionProductDelete,
  actionProductGet,
  actionProductGets,
  actionProductState,
  actionProductUpdate,
} from "./action";

export interface TypeProductState {
  products: any[];
  product: any;
}

const initialState: TypeProductState = {
  products: [],
  product: {},
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  //basic reducer
  reducers: {
    resetProduct(state: TypeProductState) {
      state.product = {};
    },
  },
  //server reducer
  extraReducers: (builder) => {
    // product create
    builder.addCase(
      actionProductCreate.fulfilled,
      (state, { meta, payload, type }) => {
        message.success("Thêm mới thành công !")
      }
    );
    builder.addCase(
      actionProductCreate.rejected,
      (state, { meta, payload, type, error }) => {
        message.error("Thêm mới thất bại !")
      }
    );

    //prodcut gets
    builder.addCase(
      actionProductGets.fulfilled,
      (state, { meta, payload, type }) => {
        state.products = payload.data;
      }
    );
    builder.addCase(
      actionProductGets.rejected,
      (state, { meta, payload, type, error }) => {
        console.log(meta, payload, type, error);
      }
    );
    //prodcut delete
    builder.addCase(
      actionProductDelete.fulfilled,
      (state, { meta, payload, type }) => {
        console.log(meta, payload, type);
      }
    );
    builder.addCase(
      actionProductDelete.rejected,
      (state, { meta, payload, type, error }) => {
        console.log(meta, payload, type, error);
      }
    );
    //prodcut state
    builder.addCase(
      actionProductState.fulfilled,
      (state, { meta, payload, type }) => {
        console.log(meta, payload, type);
      }
    );
    builder.addCase(
      actionProductState.rejected,
      (state, { meta, payload, type, error }) => {
        console.log(meta, payload, type, error);
      }
    );
    //prodcut get
    builder.addCase(
      actionProductGet.fulfilled,
      (state, { meta, payload, type }) => {
        state.product = payload.data;
      }
    );
    builder.addCase(
      actionProductUpdate.rejected,
      (state, { meta, payload, type, error }) => {
        console.log(meta, payload, type, error);
      }
    );

    //prodcut update
    builder.addCase(
      actionProductUpdate.fulfilled,
      (state, { meta, payload, type }) => {
        console.log(meta, payload, type)
       message.success("Update thành công !")
      }
    );
    builder.addCase(
      actionProductGet.rejected,
      (state, { meta, payload, type, error }) => {
        console.log(meta, payload, type,error)
        message.error("Update thất bại !")
      }
    );
  },
});

export const { resetProduct } = productSlice.actions;

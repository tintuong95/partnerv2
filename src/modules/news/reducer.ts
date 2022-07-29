import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

import { actionNewsCreate, actionNewsGet, actionNewsGets, actionNewsRemove, actionNewsUpdateId } from "./action";
import { TypeNews } from "./type";

const initialState: TypeNews = {
  newsList: [],
  news: {},
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    //add news
    builder.addCase(
      actionNewsCreate.fulfilled,
      (state, { meta, payload, type }) => {
        message.success("Thêm mới thành công !");
      }
    );
    builder.addCase(
      actionNewsCreate.rejected,
      (state, { meta, payload, type, error }) => {
        message.error("Thêm mới thất bại !");
      }
    );
    //gets news
    builder.addCase(
      actionNewsGets.fulfilled,
      (state, { meta, payload, type }) => {
        
        state.newsList=payload.data
      }
    );
    builder.addCase(
      actionNewsGets.rejected,
      (state, { meta, payload, type, error }) => {
        console.log(meta, payload, type, error);
      }
    );
    //remove by id news
    builder.addCase(
      actionNewsRemove.fulfilled,
      (state, { meta, payload, type }) => {
        
        console.log(meta, payload, type);
      }
    );
    builder.addCase(
      actionNewsRemove.rejected,
      (state, { meta, payload, type, error }) => {
        console.log(meta, payload, type, error);
      }
    );
    //get by id news
    builder.addCase(
      actionNewsGet.fulfilled,
      (state, { meta, payload, type }) => {
        
        state.news=payload.data
      }
    );
    builder.addCase(
      actionNewsGet.rejected,
      (state, { meta, payload, type, error }) => {
        console.log(meta, payload, type, error);
      }
    );
      //put by id news
      builder.addCase(
        actionNewsUpdateId.fulfilled,
        (state, { meta, payload, type }) => {
          
          message.success("Thành công !");
        }
      );
      builder.addCase(
        actionNewsUpdateId.rejected,
        (state, { meta, payload, type, error }) => {
          message.error("Thất bại !");
        }
      );
  },
});


export const {}=newsSlice.actions


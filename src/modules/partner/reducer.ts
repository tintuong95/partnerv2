import { createSlice } from "@reduxjs/toolkit";
import { history } from "../..";
import { actionProductCreate } from "../product/action";
import { actionPartnerLogin, actionPartnerLogout, actionPartnerProfile } from "./action";

import { TypePartnerState } from "./type";

const initialState: TypePartnerState = {
  partner: null,
};

export const partnerSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
      // product create
      builder.addCase(
        actionPartnerLogin.fulfilled,
        (state, { meta, payload, type }) => {
           history.push("/")
        }
      );
      builder.addCase(
        actionProductCreate.rejected,
        (state, { meta, payload, type, error }) => {
          console.log(meta, payload, type, error);
        }
      );
    //profile partner
    builder.addCase(
        actionPartnerProfile.fulfilled,
        (state, { meta, payload, type }) => {
        
            state.partner=payload.data
        }
      );
      builder.addCase(
        actionPartnerProfile.rejected,
        (state, { meta, payload, type, error }) => {
         
            history.push("/login")
        }
      );
       //logout partner
    builder.addCase(
      actionPartnerLogout.fulfilled,
      (state, { meta, payload, type }) => {
        history.push("/login")
         
      }
    );
    builder.addCase(
      actionPartnerLogout.rejected,
      (state, { meta, payload, type, error }) => {
       
        console.log(meta, payload, type, error);
      }
    );
  },
});

export const {} = partnerSlice.actions;

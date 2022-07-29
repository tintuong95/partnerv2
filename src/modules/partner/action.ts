import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPartnerLogin, fetchPartnerLogout, fetchPartnerProfile } from './api';



const actionPartnerProfile =createAsyncThunk(
    "partner/getProfile",
    async (payload,thunkAPI)=>{
        return await fetchPartnerProfile()
    }
)

const actionPartnerLogin =createAsyncThunk(
    "partner/login",
    async (payload:FormData,thunkAPI)=>{
       const response= await fetchPartnerLogin(payload)
     
        return await response
    }
)

const actionPartnerLogout =createAsyncThunk(
    "partner/logout",
    async ()=>{
       const response= await fetchPartnerLogout()
     
        return await response
    }
)

export {actionPartnerProfile,actionPartnerLogin,actionPartnerLogout}
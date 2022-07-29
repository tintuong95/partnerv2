import { configureStore } from '@reduxjs/toolkit'
import { messageSlice } from '../modules/message/reducer'
import { newsSlice } from '../modules/news/reducer'
import { partnerSlice } from '../modules/partner/reducer'
import { productSlice } from '../modules/product/reducer'
import { transactionSlice } from '../modules/transaction/reducer'


export const store = configureStore({
  reducer: {
    productReducer:productSlice.reducer,
    partnerReducer:partnerSlice.reducer,
    transactionReducer:transactionSlice.reducer,
    messageReducer:messageSlice.reducer,
    newsReducer:newsSlice.reducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


import { configureStore } from "@reduxjs/toolkit";

//slices
import appSlice from "./slices/appSlice";
//api
import fakeAPI from "./apis/fakeApi";

const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
    [fakeAPI.reducerPath]: fakeAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([fakeAPI.middleware]),
});

export default store;

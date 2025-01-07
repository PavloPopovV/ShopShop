import { configureStore } from "@reduxjs/toolkit";
import { api } from "../app/services/api";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

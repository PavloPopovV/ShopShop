import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import { userApi } from "../services/userApi";

const initialState = {
  username: null,
  isAuthenticated: false,
  role: ["GUEST"],
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.username = null;
      state.isAuthenticated = false;
      state.role = ["GUEST"];
      localStorage.removeItem("token");
    },
  },

  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.username = payload.username;
          state.isAuthenticated = true;
          state.role = payload.role;
        }
      )
      .addMatcher(
        authApi.endpoints.registration.matchFulfilled,
        (state, { payload }) => {
          state.username = payload.username;
          state.isAuthenticated = true;
          state.role = payload.role;
        }
      )
      .addMatcher(
        userApi.endpoints.getUser.matchFulfilled,
        (state, { payload }) => {
          state.username = payload.username;
          state.isAuthenticated = true;
          state.role = payload.role;
        }
      );
  },
});

export const {
  addProductToCart,
  addProductToFavourite,
  removeItemFromCart,
  removeItemFromFavourite,
} = userSlice.actions;

export default userSlice.reducer;

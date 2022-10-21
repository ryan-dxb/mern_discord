import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authService";

const initialState = {
  user: null,
  token: null,
  isAuth: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.user = null;
      state.token = null;
      state.isAuth = false;
    });
  },
});

export default authSlice.reducer;

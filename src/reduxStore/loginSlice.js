import { createSlice } from "@reduxjs/toolkit";
import { redirectToLogin } from "./localStorage";

const initialState = {
  loading: 0,
  token: "",
};

const appSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    showLoader: (state) => {},
    setLoginToken: (state, { payload }) => {
      state.token = payload;
    },
    logout: (state) => {
      state.loading = false;
      state.token = "";
      redirectToLogin();
    },
  },
});

export const { showLoader, setLoginToken, logout } = appSlice.actions;

export default appSlice.reducer;

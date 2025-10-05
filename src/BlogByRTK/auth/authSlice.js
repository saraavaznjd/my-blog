import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, // null = not logged in
  },
  reducers: {
    login: (state, action) => {
      state.user = { name: action.payload }; // فقط اسم کاربر رو ذخیره می‌کنیم
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    login: false,
    enteredName: "",
    enteredPassword: "",
  },
  reducers: {
    loginReducer: (state, action) => {
      state.login = !action.payload;
    },
    nameReducer: (state, action) => {
      state.enteredName = action.payload;
    },
  },
});

export const { loginReducer, nameReducer } = adminSlice.actions;
export default adminSlice.reducer;

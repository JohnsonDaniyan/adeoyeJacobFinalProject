import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { UserCredential } from "firebase/auth";

// Define a type for the slice state
interface appState {
  user: UserCredential | null;
}

// Define the initial state using that type
const initialState: appState = {
  user: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserCredential>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = appSlice.actions;
export const selectUser = (state: RootState) => state.app.user;
export default appSlice.reducer;

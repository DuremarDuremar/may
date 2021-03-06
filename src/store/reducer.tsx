import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserCredential } from "firebase/auth";

interface UserState {
  email: string | null;
  token: string | null;
  id: string | null;
}

const initialStateUser: UserState = {
  email: null,
  token: null,
  id: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateUser,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const userReducer = userSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: any;
  token: any;
  id: any;
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
    setUser(state, action) {
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

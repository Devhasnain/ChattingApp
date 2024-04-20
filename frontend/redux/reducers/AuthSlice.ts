import { createSlice } from "@reduxjs/toolkit";

type AuthSliceSliceData = {
  user: {
    name: string;
    email: string;
    image?: string;
    createdAt: string;
  } | null;
};

const initialState: AuthSliceSliceData = {
  user: null,
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state, action) => {
      state.user = null;
    },
  },
});

export const {setUser, logOut} = AuthSlice.actions;
export default AuthSlice.reducer;

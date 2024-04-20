import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducers/AuthSlice";

const store = configureStore({
  reducer: {
    AuthSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;


export default store
import { configureStore } from "@reduxjs/toolkit";
import genderReducer from "./genderSlice";

export const store = configureStore({
  reducer: {
    gender: genderReducer,
  },
});

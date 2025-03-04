import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boy: 0,
  girl: 0,
};

const genderSlice = createSlice({
  name: "gender",
  initialState,
  reducers: {
    addBoy: (state) => {
      state.boy += 1;
    },
    addGirl: (state) => {
      state.girl += 1;
    },
  },
});

export const { addBoy, addGirl } = genderSlice.actions;
export default genderSlice.reducer;

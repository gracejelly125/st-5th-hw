import { createSlice } from "@reduxjs/toolkit";

const initialState = () =>
  localStorage.getItem("texts")
    ? JSON.parse(localStorage.getItem("texts"))
    : [];

const textSlice = createSlice({
  name: "text",
  initialState,
  reducer: {
    addText: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addText } = textSlice.actions;
export default textSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("texts")) ?? [];

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    addText: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("texts", JSON.stringify(state));
    },
  },
});

export const { addText } = textSlice.actions;
export default textSlice.reducer;

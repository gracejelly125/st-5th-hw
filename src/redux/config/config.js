import { configureStore } from "@reduxjs/toolkit";
import textReducer from "../slices/textSlice";

const store = configureStore({
  reducer: {
    text: textReducer,
  },
});

export default store;

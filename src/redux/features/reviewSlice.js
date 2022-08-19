import { createSlice } from "@reduxjs/toolkit";
import reviews from "../../data/reviews";

const initialState = {
  all: reviews,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
});

export default reviewSlice.reducer;

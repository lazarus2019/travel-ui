import { createSlice } from "@reduxjs/toolkit";
import services from "../../data/services";
import reviews from "../../data/reviews";

const initialState = {
  services,
  reviews,
};

const shareSlice = createSlice({
  name: "share",
  initialState,
});

export default shareSlice.reducer;

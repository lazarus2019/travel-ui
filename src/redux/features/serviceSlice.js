import { createSlice } from "@reduxjs/toolkit";
import services from "../../data/services";

const initialState = {
  all: services,
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
});

export default serviceSlice.reducer;

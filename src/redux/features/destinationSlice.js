import { createSlice } from "@reduxjs/toolkit";
import { destinations } from "../../data/destinations";
import cities from "../../data/cities";

const initialState = {
  all: destinations,
  active: null,
  cities
};

const destinationSlice = createSlice({
  name: "destination",
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.activeIndex = action.payload;
    },
  },
});

export const { setActive } = destinationSlice.actions;
export default destinationSlice.reducer;

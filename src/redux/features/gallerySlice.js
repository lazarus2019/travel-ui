import { createSlice } from "@reduxjs/toolkit";
import gallery from "../../data/gallery";

const initialState = {
  all: gallery,
  isOpen: false,
  current: {},
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setOpen, setCurrent } = gallerySlice.actions;
export default gallerySlice.reducer;

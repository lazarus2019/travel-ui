import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: "registerModal",
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setCurrent, setOpen } = modalSlice.actions;
export default modalSlice.reducer;

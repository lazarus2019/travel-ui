import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import modalReducer from "./features/modalSlice";
import destinationReducer from "./features/destinationSlice";
import shareReducer from "./features/shareSlice";
import galleryReducer from "./features/gallerySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    destination: destinationReducer,
    share: shareReducer,
    gallery: galleryReducer,
  },
});

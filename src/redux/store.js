import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import modalReducer from "./features/modalSlice";
import destinationReducer from "./features/destinationSlice";
import serviceReducer from "./features/serviceSlice";
import reviewReducer from "./features/reviewSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    destination: destinationReducer,
    service: serviceReducer,
    review: reviewReducer,
  },
});

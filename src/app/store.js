import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

import plantReducer from "../features/plants/plantSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    plants: plantReducer,
  },
});

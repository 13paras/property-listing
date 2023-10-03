import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from "../slices/propertiesSlice";

export const store = configureStore({
  reducer: {
    property: propertyReducer,
  },
});

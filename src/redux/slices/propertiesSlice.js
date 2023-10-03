import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  properties: [],
  city: "New York",
};

const propertiesSlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setProperties(state, action) {
      state.properties = action.payload;
    },
    setCity(state, action) {
      state.city = action.payload;
    },
  },
});

export const { setProperties, setCity } = propertiesSlice.actions;

export default propertiesSlice.reducer;

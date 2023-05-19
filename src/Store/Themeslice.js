import { createSlice } from "@reduxjs/toolkit";

var a = {
  ActiveMode: false,
};
const ThemeSlice = createSlice({
  initialState: a,
  name: "themeslice",
  reducers: {
    Themetoggle(state, action) {
      state.ActiveMode = !state.ActiveMode;
    },
    setdefaulttheme(state, action) {
      state.ActiveMode = false;
    },
  },
});

export const ThemeSliceAction = ThemeSlice.actions;
export default ThemeSlice;

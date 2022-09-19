import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "home",
  initialState: { theme: null, darkMode: null },
  reducers: {
    actionA: (state, { payload: { theme, darkMode } }) => {
      if (typeof theme !== "undefined") {
        state.theme = theme;
      }
      if (typeof darkMode !== "undefined") {
        state.darkMode = darkMode;
      }
    },
    actionB: (state, { payload: { theme, darkMode } }) => {
      if (!state.theme) {
        state.theme = theme;
        state.darkMode = darkMode;
      }
    },
  },
});

export const { actionA, actionB } = slice.actions;

export const homeReducers = slice.reducer;

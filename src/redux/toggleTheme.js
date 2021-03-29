import { createSlice } from "@reduxjs/toolkit";

export const toggleThemeSlice = createSlice({
  name: "toggleTheme",
  initialState: {
    isDarkModeOn: false,
  },
  reducers: {
    handleDarkMode: (state) => {
      state.isDarkModeOn = !state.isDarkModeOn;
    },
  },
});

export const { handleDarkMode } = toggleThemeSlice.actions;

export const isDarkModeOn = (state) => state.toggleTheme.isDarkModeOn;

export default toggleThemeSlice.reducer;

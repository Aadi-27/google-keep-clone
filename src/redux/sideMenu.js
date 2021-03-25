import { createSlice } from "@reduxjs/toolkit";

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState: {
    selectedMenu: "Notes",
  },
  reducers: {
    toggleSelectedMenu: (state, action) => {
      state.selectedMenu = action.payload;
    },
  },
});

export const { toggleSelectedMenu } = sideMenuSlice.actions;

export const selectedMenu = (state) => state.sideMenu.selectedMenu;

export default sideMenuSlice.reducer;

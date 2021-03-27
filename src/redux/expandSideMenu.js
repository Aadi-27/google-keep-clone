import { createSlice } from "@reduxjs/toolkit";

export const expandSideMenuSlice = createSlice({
  name: "expandSideMenu",
  initialState: {
    isExpanded: false,
  },
  reducers: {
    toggleSideMenu: (state) => {
      state.isExpanded = !state.isExpanded;
    },
  },
});

export const { toggleSideMenu } = expandSideMenuSlice.actions;

export const menuIsExpanded = (state) => state.expandSideMenu.isExpanded;

export default expandSideMenuSlice.reducer;

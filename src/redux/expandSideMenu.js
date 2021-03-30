import { createSlice } from "@reduxjs/toolkit";

export const expandSideMenuSlice = createSlice({
  name: "expandSideMenu",
  initialState: {
    isExpanded: false,
    shouldContract: false,
  },
  reducers: {
    toggleSideMenu: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    handleShouldContract: (state) => {
      state.shouldContract = true;
    },
  },
});

export const {
  toggleSideMenu,
  handleShouldContract,
} = expandSideMenuSlice.actions;

export const menuIsExpanded = (state) => state.expandSideMenu.isExpanded;
export const shouldMenuContract = (state) =>
  state.expandSideMenu.shouldContract;

export default expandSideMenuSlice.reducer;

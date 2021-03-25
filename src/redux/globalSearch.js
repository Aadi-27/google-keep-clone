import { createSlice } from "@reduxjs/toolkit";

export const globalSearchSlice = createSlice({
  name: "globalSearch",
  initialState: {
    inputValue: "",
  },
  reducers: {
    editValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { editValue } = globalSearchSlice.actions;

export const searchValue = (state) => state.globalSearch.inputValue;

export default globalSearchSlice.reducer;

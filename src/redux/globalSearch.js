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
    emptyValue: (state) => {
      state.inputValue = "";
    },
  },
});

export const { editValue, emptyValue } = globalSearchSlice.actions;

export const searchValue = (state) => state.globalSearch.inputValue;

export default globalSearchSlice.reducer;

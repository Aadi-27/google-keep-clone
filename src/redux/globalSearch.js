import { createSlice } from "@reduxjs/toolkit";

export const globalSearchSlice = createSlice({
  name: "globalSearch",
  initialState: {
    inputValue: "",
    inputFocus: false,
  },
  reducers: {
    editValue: (state, action) => {
      state.inputValue = action.payload;
    },
    emptyValue: (state) => {
      state.inputValue = "";
    },
    handleFocus: (state, action) => {
      state.inputFocus = action.payload;
    },
  },
});

export const { editValue, emptyValue, handleFocus } = globalSearchSlice.actions;

export const searchValue = (state) => state.globalSearch.inputValue;
export const inputFocus = (state) => state.globalSearch.inputFocus;

export default globalSearchSlice.reducer;

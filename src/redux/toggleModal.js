import { createSlice } from "@reduxjs/toolkit";

export const toggleModalSlice = createSlice({
  name: "toggleModal",
  initialState: {
    isOpen: false,
  },
  reducers: {
    handleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { handleModal } = toggleModalSlice.actions;

export const modalIsOpen = (state) => state.toggleModal.isOpen;

export default toggleModalSlice.reducer;

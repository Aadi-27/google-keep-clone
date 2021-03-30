import { createSlice } from "@reduxjs/toolkit";

export const toggleModalSlice = createSlice({
  name: "toggleModal",
  initialState: {
    id: "",
    isModalOn: false,
  },
  reducers: {
    handleModal: (state) => {
      state.isModalOn = !state.isModalOn;
    },
    handleModalId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { handleModal, handleModalId } = toggleModalSlice.actions;

export const modal = (state) => state.toggleModal.isModalOn;
export const modalId = (state) => state.toggleModal.id;

export default toggleModalSlice.reducer;

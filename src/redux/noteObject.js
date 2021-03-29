import { createSlice } from "@reduxjs/toolkit";

const initialObject = {
  id: 0,
  title: "",
  desc: "",
  isArchived: false,
  isPinned: false,
};

export const noteObjectSlice = createSlice({
  name: "noteObject",
  initialState: {
    noteObject: initialObject,
  },
  reducers: {
    emptyNote: (state) => {
      state.noteObject = initialObject;
    },
    editNote: (state, action) => {
      state.noteObject = action.payload;
    },
    editTitle: (state, action) => {
      state.noteObject.title = action.payload;
    },
    editDesc: (state, action) => {
      state.noteObject.desc = action.payload;
    },
    toggleIsArchived: (state) => {
      state.noteObject.isArchived = !state.noteObject.isArchived;
    },
    toggleIsPinned: (state) => {
      state.noteObject.isPinned = !state.noteObject.isPinned;
    },
  },
});

export const {
  emptyNote,
  editNote,
  editTitle,
  editDesc,
  toggleIsArchived,
  toggleIsPinned,
} = noteObjectSlice.actions;

export const noteObj = (state) => state.noteObject.noteObject;

export default noteObjectSlice.reducer;

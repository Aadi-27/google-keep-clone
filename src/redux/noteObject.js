import { createSlice } from "@reduxjs/toolkit";

const initialObject = {
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
    emptyObject: (state) => {
      state.noteObject = initialObject;
    },
    editTitle: (state, action) => {
      return { ...state.noteObject, title: action.payload };
    },
    editDesc: (state, action) => {
      return { ...state.noteObject, desc: action.payload };
    },
    toggleIsArchived: (state, action) => {
      return { ...state.noteObject, isArchived: action.payload };
    },
    toggleIsPinned: (state, action) => {
      return { ...state.noteObject, isPinned: action.payload };
    },
  },
});

export const {
  emptyObject,
  editTitle,
  editDesc,
  toggleIsArchived,
  toggleIsPinned,
} = noteObjectSlice.actions;

export const noteee = (state) => state.note.noteObject;

export default noteObjectSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notesArray",
  initialState: {
    notesArray: [],
  },
  reducers: {
    addNotes: (state, action) => {
      if (action.payload.title.length || action.payload.desc.length) {
        state.notesArray.push(action.payload);
      }
    },
    editNotes: (state, action) => {
      const index = state.notesArray.indexOf(
        (note) => note.id === action.payload.id
      );
      state.notesArray.splice(index, 1, action.payload);
    },
    deleteNotes: (state, action) => {
      state.notesArray = state.notesArray.filter(
        (note) => note.id !== action.payload
      );
    },
    archiveNotes: (state, action) => {
      state.notesArray.map((note) => {
        if (note.id === action.payload && note.isPinned) {
          return (
            (note.isArchived = !note.isArchived),
            (note.isPinned = !note.isPinned)
          );
        } else if (note.id === action.payload) {
          return (note.isArchived = !note.isArchived);
        }
        return note;
      });
    },
    pinNotes: (state, action) => {
      state.notesArray.map((note) => {
        if (note.id === action.payload && note.isArchived) {
          return (
            (note.isPinned = !note.isPinned),
            (note.isArchived = !note.isArchived)
          );
        } else if (note.id === action.payload) {
          return (note.isPinned = !note.isPinned);
        }
        return note;
      });
    },
  },
});

export const {
  addNotes,
  editNotes,
  deleteNotes,
  archiveNotes,
  pinNotes,
} = notesSlice.actions;

export const notesArray = (state) => state.notesArray.notesArray;

export default notesSlice.reducer;

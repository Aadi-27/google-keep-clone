import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
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
      state.notesArray.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
    },
    deleteNotes: (state, action) => {
      state.notesArray.filter((note) => note.id !== action.payload.id);
    },
    archiveNotes: (state, action) => {
      state.notesArray.map((note) => {
        if (note.id === action.payload.id) {
          return (note.isArchived = action.payload);
        }
        return note;
      });
    },
    pinNotes: (state, action) => {
      state.notesArray.map((note) => {
        if (note.id === action.payload.id) {
          return (note.isPinned = action.payload);
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

export const notesArray = (state) => state.notes.notesArray;

export default notesSlice.reducer;

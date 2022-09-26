import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
  id: string;
  title: string;
  description: string;
}

interface NotesState {
  note: Note;
  selectedNote?: Note;
  notes: Array<Note>;
}

const initialState: NotesState = {
  note: { id: "", title: "", description: "" },
  selectedNote: { id: "", title: "", description: "" },
  notes: [],
};

export const notesAppSlice = createSlice({
  name: "notesApp",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes = [...state.notes, action.payload];
    },
    updateNoteTitle: (state, action: PayloadAction<string>) => {
      state.note.title = action.payload;
    },
    updateNoteDescription: (state, action: PayloadAction<string>) => {
      state.note.description = action.payload;
    },
    resetNote: (state) => {
      state.note.id = "";
      state.note.title = "";
      state.note.description = "";
    },
    selectNote: (state, action: PayloadAction<Note>) => {
      state.selectedNote = state.notes.find(
        (note: Note) => note.id === action.payload.id
      );
    },
  },
});

export type { Note };
export const notesAppActions = notesAppSlice.actions;
export const notesAppReducer = notesAppSlice.reducer;

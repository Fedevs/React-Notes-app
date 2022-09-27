import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
  id: string;
  title: string;
  description: string;
}

interface NotesState {
  note: Note;
  notes: Array<Note>;
}

const initialState: NotesState = {
  note: { id: "", title: "", description: "" },
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
  },
});

export type { Note };
export const notesAppActions = notesAppSlice.actions;
export const notesAppReducer = notesAppSlice.reducer;

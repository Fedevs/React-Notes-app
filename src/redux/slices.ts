import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
  id: string;
  text: string;
}

interface NotesState {
  note: Note;
  selectedNote?: string;
  notes: Array<Note>;
}

const initialState: NotesState = {
  note: { id: "", text: "" },
  selectedNote: "",
  notes: [],
};

export const notesAppSlice = createSlice({
  name: "notesApp",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes = [...state.notes, action.payload];
    },
    updateNote: (state, action: PayloadAction<string>) => {
      state.note.text = action.payload;
    },
    getNote: (state, action: PayloadAction<string>) => {
      state.selectedNote = state.notes.find(
        (note: Note) => note.id === action.payload
      )?.id;
    },
  },
});

export type { Note };
export const notesAppActions = notesAppSlice.actions;
export const notesAppReducer = notesAppSlice.reducer;

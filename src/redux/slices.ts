import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotesState {
  note: string;
  notes: Array<string>;
}

const initialState: NotesState = {
  note: "",
  notes: [],
};

export const notesAppSlice = createSlice({
  name: "notesApp",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      state.notes = [...state.notes, action.payload];
    },
    updateNote: (state, action: PayloadAction<string>) => {
      state.note = action.payload;
    },
  },
});

export const notesAppActions = notesAppSlice.actions;

export const notesAppReducer = notesAppSlice.reducer;

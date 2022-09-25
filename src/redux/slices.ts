import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotesState {
  notes: Array<string>;
}

const initialState: NotesState = {
  notes: [],
};

export const notesAppSlice = createSlice({
  name: "notesApp",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      state.notes = [...state.notes, action.payload];
    },
  },
});

export const notesAppActions = notesAppSlice.actions;

export const notesAppReducer = notesAppSlice.reducer;

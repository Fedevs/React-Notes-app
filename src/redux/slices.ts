import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotesState {
  notes: Array<string>;
}

const initialState: NotesState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
      state.notes = [...state.notes, action.payload];
    },
  },
});

export const { addNote } = noteSlice.actions;

export default noteSlice.reducer;

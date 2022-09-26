import { configureStore } from "@reduxjs/toolkit";
import { notesAppReducer } from "./NotesApp/slices";
import { utilsReducer } from "./utils/slices";

export const store = configureStore({
  reducer: {
    notesApp: notesAppReducer,
    utils: utilsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

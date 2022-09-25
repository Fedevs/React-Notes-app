import { configureStore } from "@reduxjs/toolkit";
import { notesAppReducer } from "./slices";

export const store = configureStore({
  reducer: {
    notesApp: notesAppReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

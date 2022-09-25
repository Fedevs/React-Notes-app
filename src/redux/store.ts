import { configureStore } from "@reduxjs/toolkit";
import noteSliceReducer from "./slices";

export const store = configureStore({
  reducer: {
    notes: noteSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

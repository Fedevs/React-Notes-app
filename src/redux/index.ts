export { useAppSelector, useAppDispatch } from "./hooks";
export {
  notesAppReducer,
  notesAppSlice,
  notesAppActions,
} from "./NotesApp/slices";
export type { Note } from "./NotesApp/slices";
export { utilsReducer, utilsSlice, utilsActions } from "./utils/slices";
export type { ScreenSize } from "./utils/slices";
export { store } from "./store";
export type { RootState, AppDispatch } from "./store";

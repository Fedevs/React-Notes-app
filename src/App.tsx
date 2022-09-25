import React from "react";
import { NewNoteInput } from "./components/NewNoteInput";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector, notesAppActions } from "./redux";

function App() {
  const notes = useAppSelector((state) => state.notesApp.notes);
  const dispatch = useAppDispatch();

  const addNote = (note: string) => {
    dispatch(notesAppActions.addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={addNote} />
      <ul>
        {notes.map((note: string) => {
          return <li key={uuidv4()}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;

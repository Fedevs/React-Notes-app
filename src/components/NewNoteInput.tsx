import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector, notesAppActions } from "../redux";

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const note = useAppSelector((state) => state.notesApp.note);
  const dispatch = useAppDispatch();

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(notesAppActions.updateNote(event.target.value));
  };

  const onAddNoteClick = () => {
    addNote(note);
    resetNote();
  };

  const resetNote = () => {
    dispatch(notesAppActions.updateNote(""));
  };

  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};

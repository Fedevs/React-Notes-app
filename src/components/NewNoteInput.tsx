import React, { ChangeEvent } from "react";
import {
  useAppDispatch,
  useAppSelector,
  notesAppActions,
  Note,
} from "../redux";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

interface NewNoteInputProps {
  addNote(note: Note): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const note = useAppSelector((state) => state.notesApp.note.text);
  const dispatch = useAppDispatch();

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(notesAppActions.updateNote(event.target.value));
  };

  const onAddNoteClick = () => {
    addNote({ id: uuidv4(), text: note });
    resetNote();
  };

  const resetNote = () => {
    dispatch(notesAppActions.updateNote(""));
  };

  return (
    <InputGroup size="md">
      <Input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      />
      <InputRightElement width="5rem">
        <Button onClick={onAddNoteClick}>Add note</Button>
      </InputRightElement>
    </InputGroup>
  );
};

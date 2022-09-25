import React, { ChangeEvent } from "react";
import {
  useAppDispatch,
  useAppSelector,
  notesAppActions,
  Note,
} from "../redux";
import { Input, FormControl, Textarea, Button, VStack } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

interface NewNoteInputProps {
  addNote(event: React.SyntheticEvent, note: Note): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const { title, description } = useAppSelector((state) => state.notesApp.note);
  const dispatch = useAppDispatch();
  const formStyle = {
    width: "100%",
  };

  const updateNoteTitle = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(notesAppActions.updateNoteTitle(event.target.value));
  };

  const updateNoteDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(notesAppActions.updateNoteDescription(event.target.value));
  };

  const onAddNoteClick = (event: React.SyntheticEvent) => {
    addNote(event, { id: uuidv4(), title, description });
    resetNote();
  };

  const resetNote = () => {
    dispatch(notesAppActions.resetNote());
  };

  return (
    <>
      <VStack w="100%">
        <form onSubmit={onAddNoteClick} style={formStyle}>
          <FormControl isRequired>
            <Input
              onChange={updateNoteTitle}
              value={title}
              type="text"
              name="title"
              placeholder="Title"
            />
          </FormControl>
          <FormControl isRequired my={2}>
            <Textarea
              onChange={updateNoteDescription}
              value={description}
              name="description"
              placeholder="Description"
            ></Textarea>
          </FormControl>
          <Button type="submit" w="100%">
            Add note
          </Button>
        </form>
      </VStack>
    </>
  );
};

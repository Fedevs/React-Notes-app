import React from "react";
import { NewNoteInput } from "./components/NewNoteInput";
import { useAppDispatch, useAppSelector, notesAppActions, Note } from "./redux";
import { Container, Box, Grid, Flex, Text, GridItem } from "@chakra-ui/react";
import { NoteBox } from "./components/NoteBox";

function App() {
  const selectedNote = useAppSelector((state) => state.notesApp.selectedNote);
  const notes = useAppSelector((state) => state.notesApp.notes);
  const dispatch = useAppDispatch();

  const addNote = (note: Note) => {
    dispatch(notesAppActions.addNote(note));
  };

  return (
    <>
      <Container maxW={"100%"}>
        <Flex w="100%" p={12}>
          <Box w="1200px" p={4}>
            <NewNoteInput addNote={addNote} />
            <Grid mt={4} templateColumns="repeat(auto-fit, 130px)" gap={6}>
              {notes.map((note: Note) => {
                return (
                  <GridItem key={note.id} w="100%" cursor="pointer">
                    <NoteBox note={note.text} />
                  </GridItem>
                );
              })}
            </Grid>
          </Box>
          <Box w="100%" p={4}>
            <Text>asd 2</Text>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default App;

import { NewNoteInput } from "./components/NewNoteInput";
import { useAppDispatch, useAppSelector, notesAppActions, Note } from "./redux";
import { Container, Box, Grid, Flex, GridItem } from "@chakra-ui/react";
import { NoteBox } from "./components/NoteBox";
import { SelectedNoteBox } from "./components/SelectedNoteBox";

function App() {
  const { selectedNote, notes } = useAppSelector((state) => state.notesApp);
  const dispatch = useAppDispatch();

  const addNote = (note: Note) => {
    dispatch(notesAppActions.addNote(note));
  };

  const selectNote = (note: Note) => {
    dispatch(notesAppActions.selectNote(note));
  };

  return (
    <>
      <Container maxW={"100%"} h="100vh">
        <Flex w="100%" p={12}>
          <Box w="1200px" p={4}>
            <NewNoteInput addNote={addNote} />
            <Grid mt={4} templateColumns="1fr" gap={6}>
              {notes.map((note: Note) => {
                return (
                  <GridItem
                    key={note.id}
                    w="100%"
                    cursor="pointer"
                    onClick={() => selectNote(note)}
                  >
                    <NoteBox note={note.text} />
                  </GridItem>
                );
              })}
            </Grid>
          </Box>

          <Box w="100%" shadow="md" borderWidth="1px" h="100%" p={4}>
            {selectedNote && <SelectedNoteBox note={selectedNote.text} />}
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default App;

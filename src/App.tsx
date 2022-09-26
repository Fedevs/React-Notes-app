import { NewNoteInput } from "./components/NewNoteInput";
import {
  useAppDispatch,
  useAppSelector,
  notesAppActions,
  Note,
  utilsActions,
  ScreenSize,
} from "./redux";
import { Container, Box, Grid, Flex, GridItem } from "@chakra-ui/react";
import { NoteBox } from "./components/NoteBox";
import { SelectedNoteBox } from "./components/SelectedNoteBox";
import { useEffect } from "react";

function App() {
  const { selectedNote, notes } = useAppSelector((state) => state.notesApp);
  const { width } = useAppSelector((state) => state.utils);
  const dispatch = useAppDispatch();
  let isMobile: boolean = width < 768;

  useEffect(() => {
    window.addEventListener("resize", () => setSize());

    return () => {
      window.removeEventListener("resize", () => setSize());
    };
  });

  const setSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    dispatch(utilsActions.setSize({ width, height }));
  };

  const addNote = (event: React.SyntheticEvent, note: Note) => {
    event.preventDefault();
    dispatch(notesAppActions.addNote(note));
  };

  const selectNote = (note: Note) => {
    dispatch(notesAppActions.selectNote(note));
  };

  return (
    <>
      <Container maxW={"100%"} h="100vh">
        <Flex w="100%" p={isMobile ? 1 : 12}>
          <Box w="1200px" p={4} maxW="1200px">
            <NewNoteInput addNote={addNote} />
            <Grid mt={4} templateColumns="1fr" gap={6} w="100%">
              {notes.map((note: Note) => {
                return (
                  <GridItem
                    key={note.id}
                    w="100%"
                    cursor="pointer"
                    onClick={() => selectNote(note)}
                  >
                    <NoteBox
                      title={note.title}
                      description={note.description}
                    />
                  </GridItem>
                );
              })}
            </Grid>
          </Box>
          {!isMobile && (
            <Box w="100%" borderWidth="1px" h="100%" p={4}>
              {selectedNote && (
                <SelectedNoteBox note={selectedNote.description} />
              )}
            </Box>
          )}
        </Flex>
      </Container>
    </>
  );
}

export default App;

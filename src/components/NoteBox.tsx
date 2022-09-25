import react from "react";
import { useAppDispatch, useAppSelector, notesAppActions } from "../redux";
import { Box, Text } from "@chakra-ui/react";

interface NoteBoxProps {
  note: string;
}

export const NoteBox: React.FC<NoteBoxProps> = ({ note }) => {
  return (
    <Box p={2} shadow="md" borderWidth="1px" w="130px" h="130px">
      <Text overflow="hidden">{note}</Text>
    </Box>
  );
};

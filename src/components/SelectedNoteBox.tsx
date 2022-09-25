import { VStack, Text, StackDivider, Heading, Center } from "@chakra-ui/react";

interface NoteBoxProps {
  note: string;
}

export const SelectedNoteBox: React.FC<NoteBoxProps> = ({ note }) => {
  return (
    <VStack divider={<StackDivider borderColor="gray.200" />} align="left">
      <Heading>
        <Center>Note</Center>
      </Heading>
      <Text>{note ? note : "Click a note to display it here."}</Text>
    </VStack>
  );
};

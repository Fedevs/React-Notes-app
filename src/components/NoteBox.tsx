import { Box, Text, Heading, Center } from "@chakra-ui/react";

interface NoteBoxProps {
  title: string;
  description: string;
}

export const NoteBox: React.FC<NoteBoxProps> = ({ title, description }) => {
  return (
    <Box
      p={2}
      shadow="md"
      borderWidth="1px"
      maxW="100%"
      maxH="130px"
      overflowY={"auto"}
    >
      <Heading size="sm">
        <Center>{title}</Center>
      </Heading>
      <Text mt={2} fontSize="sm">
        {description}
      </Text>
    </Box>
  );
};

import { Box, Text, Heading, ButtonGroup } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Flex, Spacer } from "@chakra-ui/react";

interface NoteBoxProps {
  title: string;
  description: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const NoteBox: React.FC<NoteBoxProps> = ({
  title,
  description,
  onEdit,
  onDelete,
}) => {
  return (
    <Box
      p={2}
      shadow="md"
      borderWidth="1px"
      maxW="100%"
      maxH="130px"
      overflowY={"auto"}
    >
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">{title}</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <IconButton
            aria-label="Edit note"
            onClick={onEdit}
            icon={<EditIcon />}
          />
          <IconButton
            aria-label="Delete note"
            onClick={onDelete}
            icon={<DeleteIcon />}
          />
        </ButtonGroup>
      </Flex>
      <Text mt={2} fontSize="sm">
        {description}
      </Text>
    </Box>
  );
};

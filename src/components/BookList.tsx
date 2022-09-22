import { Box, List, Text } from "@chakra-ui/react";
import { useBooksStore } from "../modules/bookStore";
import { BookItem } from "./BookItem";

export const BookList: React.FC = () => {
  const bookIds = useBooksStore((state) => state.books.map((b) => b.bookId));

  return (
    <Box>
      <Box
        sx={{
          mt: 1,
          mb: 1,
        }}
      >
        <Text variant="h1" fontSize="2xl">
          本の一覧
        </Text>
      </Box>
      <List spacing={3}>
        {bookIds.map((id) => (
          <BookItem key={id} bookId={id} />
        ))}
      </List>
    </Box>
  );
};

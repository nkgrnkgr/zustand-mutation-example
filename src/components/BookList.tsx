import { Box, List, Text } from "@chakra-ui/react";
import { useBooksStore } from "../modules/store";
import { BookItem } from "./BookItem";

export const BookList: React.FC = () => {
  const bookIds = useBooksStore((state) => state.books.map((b) => b.bookId));

  return (
    <Box>
      <Text>BookList</Text>
      <List spacing={3}>
        {bookIds.map((id) => (
          <BookItem key={id} bookId={id} />
        ))}
      </List>
    </Box>
  );
};

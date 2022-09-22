import { Box, List, Text } from "@chakra-ui/react";
import { useBooksStore } from "../modules/store";
import { BookItem } from "./BookItem";

export const BookList: React.FC = () => {
  const books = useBooksStore((state) => state.books);

  return (
    <Box>
      <Text>BookList</Text>
      <List spacing={3}>
        {books.map((book) => (
          <BookItem key={book.bookId} bookId={book.bookId} />
        ))}
      </List>
    </Box>
  );
};

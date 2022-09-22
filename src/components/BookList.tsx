import { Box, List, Text } from "@chakra-ui/react";
import { useBooksStore } from "../modules/bookStore";
import { BookItem } from "./BookItem";

export const BookList: React.FC = () => {
  const books = useBooksStore((state) => state.books);

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
        {books.map((book) => (
          <BookItem key={book.bookId} book={book} />
        ))}
      </List>
    </Box>
  );
};

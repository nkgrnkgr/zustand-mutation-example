import { Box, List, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { BooksState, useBooksStore } from "../modules/bookStore";
import { BookItem } from "./BookItem";
import { createSelector } from "reselect";

const getBookIds = createSelector(
  (state: BooksState) => state.books.map((b) => b.bookId),
  (ids) => ids
);

export const BookList: React.FC = () => {
  const bookIds = useBooksStore(getBookIds);

  useEffect(() => {
    console.log(bookIds);
  }, [bookIds]);

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

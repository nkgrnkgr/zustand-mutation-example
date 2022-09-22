import { CheckboxIcon, Input, ListIcon, ListItem } from "@chakra-ui/react";
import { useBooksStore } from "../modules/store";

type Props = {
  bookId: string;
};
export const BookItem: React.FC<Props> = ({ bookId }) => {
  const book = useBooksStore((state) =>
    state.books.find((book) => book.bookId === bookId)
  );

  if (!book) {
    return null;
  }

  const handleChange = (value: string) => {
    //
  };

  return (
    <ListItem>
      <ListIcon as={CheckboxIcon} color="green.500" />
      <Input type="text" value={book.title} onChange={handleChange} />
    </ListItem>
  );
};

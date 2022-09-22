import { CheckCircleIcon } from "@chakra-ui/icons";
import { Input, ListIcon, ListItem } from "@chakra-ui/react";
import { AUTHORS } from "../modules/constants";
import { useBooksStore } from "../modules/store";
import { AuthorSelect } from "./AuthorSelect";

type Props = {
  bookId: string;
};
export const BookItem: React.FC<Props> = ({ bookId }) => {
  const book = useBooksStore((state) =>
    state.books.find((book) => book.bookId === bookId)
  );
  const update = useBooksStore((state) => state.updateOne);

  if (!book) {
    return null;
  }

  const handleChange = (value: string) => {
    update({
      ...book,
      title: value,
    });
  };

  const handleSelect = (value: string) => {
    update({
      ...book,
      author: AUTHORS.find((author) => author.authorId === value),
    });
  };

  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <ListIcon as={CheckCircleIcon} color="green.500" />
      <Input
        type="text"
        value={book.title}
        onChange={(e) => handleChange(e.target.value)}
      />
      <AuthorSelect
        selectAuthor={handleSelect}
        selectedAuthorId={book.author?.authorId || ""}
      />
    </ListItem>
  );
};

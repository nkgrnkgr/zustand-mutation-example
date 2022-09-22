import { Icon, Input, ListItem } from "@chakra-ui/react";
import { useBooksStore } from "../modules/bookStore";
import { AUTHORS } from "../modules/constants";
import { AuthorSelect } from "./AuthorSelect";
import { MdBook } from "react-icons/md";
import { Book } from "../modules/types";

type Props = {
  book: Book;
};
export const BookItem: React.FC<Props> = ({ book }) => {
  const update = useBooksStore((state) => state.updateOne);
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
      <Icon as={MdBook} color="green.500" />
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

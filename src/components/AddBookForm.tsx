import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useBooksStore } from "../modules/bookStore";
import { AUTHORS } from "../modules/constants";
import { AuthorSelect } from "./AuthorSelect";

export const AddBookForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [selectedAuthorId, setSelectedAuthorId] = useState("");

  const add = useBooksStore((state) => state.addOne);

  const handleChange = (value: string) => {
    setTitle(value);
  };

  const handleSelect = (value: string) => {
    setSelectedAuthorId(value);
  };

  const handleClick = () => {
    add({
      title,
      author: AUTHORS.find((a) => a.authorId === selectedAuthorId),
    });
  };

  return (
    <FormControl
      sx={{
        mt: 2,
        mb: 2,
      }}
    >
      <FormLabel fontSize="2xl">本の登録</FormLabel>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 1,
        }}
      >
        <Input
          placeholder="タイトル"
          type="text"
          value={title}
          onChange={(e) => handleChange(e.target.value)}
        />
        <AuthorSelect
          selectedAuthorId={selectedAuthorId}
          selectAuthor={handleSelect}
        />
      </Box>
      <Button onClick={handleClick}>追加</Button>
    </FormControl>
  );
};

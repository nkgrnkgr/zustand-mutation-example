import { Box } from "@chakra-ui/react";
import { useBooksStore } from "../modules/bookStore";

export const Result: React.FC = () => {
  const books = useBooksStore((state) => state.books);

  return (
    <Box
      sx={{
        mt: 4,
        p: 4,
        bgColor: "gray.100",
      }}
    >
      <pre>{JSON.stringify(books, null, 2)}</pre>
    </Box>
  );
};

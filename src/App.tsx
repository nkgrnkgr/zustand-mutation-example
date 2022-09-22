import { Container, Divider } from "@chakra-ui/react";
import { AddBookForm } from "./components/AddBookForm";
import { BookList } from "./components/BookList";
import { Result } from "./components/Result";

export const App: React.FC = () => {
  return (
    <Container
      sx={{
        mt: 10,
      }}
    >
      <AddBookForm />
      <Divider sx={{ m: 2 }} />
      <BookList />
      <Divider sx={{ m: 2 }} />
      <Result />
    </Container>
  );
};

import { Center, Container } from "@chakra-ui/react";
import { BookList } from "./components/BookList";
import { Result } from "./components/Result";

export const App: React.FC = () => {
  return (
    <Container
      sx={{
        mt: 10,
      }}
    >
      <BookList />
      <Result />
    </Container>
  );
};

import { Select } from "@chakra-ui/react";
import { AUTHORS } from "../modules/constants";

type Props = {
  selectedAuthorId: string;
  selectAuthor: (id: string) => void;
};

export const AuthorSelect: React.FC<Props> = ({
  selectAuthor,
  selectedAuthorId,
}) => {
  return (
    <Select
      defaultValue={selectedAuthorId}
      placeholder="著者"
      onChange={(e) => selectAuthor(e.target.value)}
    >
      {AUTHORS.map((author) => (
        <option key={author.authorId} value={author.authorId}>
          {author.name}
        </option>
      ))}
    </Select>
  );
};

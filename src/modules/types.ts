export type Author = {
  authorId: string;
  name: string;
};

export type Book = {
  bookId: string;
  title: string;
  author?: Author;
};

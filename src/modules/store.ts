import create from "zustand";

type Author = {
  authorId: string;
  name: string;
};

type Book = {
  bookId: string;
  title: string;
  author?: Author;
};

type BooksState = {
  books: Book[];
};

export const useBooksStore = create<BooksState>((set) => ({
  books: [
    {
      bookId: "1",
      title: "名探偵コナン",
      author: {
        authorId: "author-1",
        name: "青山剛昌",
      },
    },
    {
      bookId: "2",
      title: "ワンピース",
      author: {
        authorId: "author-2",
        name: "尾田栄一郎",
      },
    },
    {
      bookId: "3",
      title: "らんま1/2",
      author: {
        authorId: "author-3",
        name: "高橋留美子",
      },
    },
  ],
  addOne: (book: Book) =>
    set((state) => {
      return {
        books: [...state.books, book],
      };
    }),
}));

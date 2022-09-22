import create from "zustand";
import { v4 as uuid } from "uuid";
import { Book } from "./types";

type BooksState = {
  books: Book[];
  addOne: (value: Omit<Book, "bookId">) => void;
  updateOne: (book: Book) => void;
};

const INITIAL_BOOKS = [
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
];

export const useBooksStore = create<BooksState>((set) => ({
  books: INITIAL_BOOKS,
  addOne: ({ title, author }) =>
    set((state) => {
      state.books = [...state.books, { bookId: uuid(), title, author }];
      return state;
    }),
  updateOne: (book) =>
    set((state) => {
      const books = state.books.map((b) => {
        if (b.bookId === book.bookId) {
          return book;
        }
        return b;
      });
      return {
        ...state,
        books,
      };
    }),
}));

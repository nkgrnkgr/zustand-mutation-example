import create from "zustand";
import { v4 as uuid } from "uuid";
import { Book } from "./types";
import { AUTHORS } from "./constants";
import { immer } from "zustand/middleware/immer";

export type BooksState = {
  books: Book[];
  addOne: (value: Omit<Book, "bookId">) => void;
  updateOne: (book: Book) => void;
};

const INITIAL_BOOKS = [
  {
    bookId: "1",
    title: "名探偵コナン",
    author: AUTHORS[0],
  },
  {
    bookId: "2",
    title: "ワンピース",
    author: AUTHORS[1],
  },
  {
    bookId: "3",
    title: "らんま1/2",
    author: AUTHORS[2],
  },
];

export const useBooksStore = create<BooksState>()(
  immer<BooksState>((set) => ({
    books: INITIAL_BOOKS,
    addOne(value) {
      set((state) => {
        state.books.push({
          bookId: uuid(),
          title: value.title,
          author: value.author,
        });
        return state;
      });
    },
    updateOne(book) {
      set((state) => {
        const index = state.books.findIndex((b) => b.bookId === book.bookId);
        if (index > -1) {
          state.books[index] = book;
        }
      });
    },
  }))
);

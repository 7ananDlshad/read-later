import React, { useEffect, useContext } from "react";
import BooksItem from "./booksItem";
import Context from "../stateProvider";
import { databaseRef } from "../firebase";

export const BooksList = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    // databaseRef
    //   .where("author", "==", "no name")
    //   // if you wanna just return a some specific data
    //   .orderBy("title")
    //   .get()
    //   .then((bookData) => {
    //     // console.log(bookData.docs);
    //     const arr = [];
    //     bookData.docs.forEach((document) => {
    //       // console.log(document.data());

    //       arr.push({ ...document.data(), id: document.id });
    //     });

    databaseRef.onSnapshot((snapshot) => {
      let changes = snapshot.docChanges();
      console.log(changes);
      const arr = [];
      changes.forEach((change) => {
        // console.log(change.doc.data());
        if (change.type === "added") {
        } else if (change.type === "removed") {
        }
      });

      dispatch({ type: "SET_BOOKS", booksList: arr });
    });
  }, [dispatch]);

  return (
    <div>
      {state.booksList.map((book) => {
        return (
          <BooksItem
            title={book.title}
            author={book.author}
            key={book.id}
            id={book.id}
          />
        );
      })}
    </div>
  );
};

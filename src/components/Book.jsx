import React from "react";
import BookWithToggle from "./BookWithToggle";

function Book({books}){
  return (
    <>
    {books.map((book)=>
            <BookWithToggle key={book.title} book={book} />
            )
    }
    </>
  );
}

export default Book;

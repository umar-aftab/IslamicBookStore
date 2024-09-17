import React from "react";
import BookWithToggle from "./BookWithToggle";

function Book({books}){
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {books.map((book)=>
            <BookWithToggle key={book.title} book={book} />
            )
    }
    </div>
  );
}

export default Book;

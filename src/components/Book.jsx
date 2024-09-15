import React,{useState} from "react";
import BookSummary from "./BookSummary";
import BookDetails from "./BookDetails";

function Book({books}){
    const [showSummary,setShowSummary]=useState(false);
    return (
        <>
        {
            books.map(
                (book,index) =>(
                       <div key={index}>
                            <BookDetails title={book.title} author={book.author} year={book.year} />
                        
                            <button onClick={()=> setShowSummary(!showSummary)}>
                                {showSummary ? "Hide Summary" : "Show Summary"}
                            </button>
                            {showSummary && <BookSummary summary={book.summary}/>}
                        </div>
            
                    ))
        }
        </>
    );

}

export default Book;

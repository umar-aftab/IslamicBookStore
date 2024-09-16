import React,{useState} from "react";
import BookDetails from './BookDetails';
import BookSummary from './BookSummary';

function BookWithToggle({book}){
    const [showSummary,setShowSummary]=useState(false);
    return (
        <>
        {
            <div>
                <BookDetails title={book.title} author={book.author} year={book.year} />
            
                <button onClick={()=> setShowSummary(!showSummary)}>
                    {showSummary ? "Hide Summary" : "Show Summary"}
                </button>
                {showSummary && <BookSummary summary={book.summary}/>}
            </div>
        
        }
        </>
    );
}

export default BookWithToggle;
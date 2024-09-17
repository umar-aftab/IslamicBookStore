import React,{useState} from "react";
import BookDetails from './BookDetails';
import BookSummary from './BookSummary';

function BookWithToggle({book}){
    const [showSummary,setShowSummary]=useState(false);
    return (
        <>
        {
            <div className="">
                <div>
                <BookDetails title={book.title} author={book.author} year={book.year} image={book.image}/>
            
                <button onClick={()=> setShowSummary(!showSummary)} className="px-4 py-2 bg-orange-950 text-white font-semibold rounded hover:bg-orange-700 transition mt-2">
                    {showSummary ? "Hide Summary" : "Show Summary"}
                </button>
                {showSummary && <BookSummary summary={book.summary}/>}
                </div>
            </div>
        
        }
        </>
    );
}

export default BookWithToggle;
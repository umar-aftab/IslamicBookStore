import React from "react";

function BookDetails({title,author,year}){
    return(
        <>
            <h2>{title}- {author}</h2>
            <h3>Written in {year}</h3>
        </>
    );
}

export default BookDetails;
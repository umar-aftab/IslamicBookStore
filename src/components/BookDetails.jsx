import React from "react";

function BookDetails({title,author,year,image}){
    return(
        <>
            <div className="flex flex-col items-center border p-4 shadow-md rounded-md my-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <img
                    src={image}
                    className="w-32 h-40 object-cover rounded-md mb-4 p-4"
                />
                <h3 className="text-lg italic">{author}</h3>
                <p className="text-sm">Written in {year}</p>
            </div>
        </>
    );
}

export default BookDetails;
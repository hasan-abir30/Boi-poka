import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    
    const bookFind = data.find(book => book.bookId===id)
    console.log(bookFind)
    
    return (
        <div>
            <h2>Book detail</h2>
        </div>
    );
};

export default BookDetails;
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();

    const bookFind = data.find(book => book.bookId === id)

    const { image, bookName, author, category, review, tags, totalPages, rating, publisher, yearOfPublishing } = bookFind;

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">{bookName}</h1>
                    <h3 className='font-medium text-xl '>By: {author}</h3>
                    <p>{category}</p>
                    <p className="py-6">
                        Review : {review}
                    </p>

                    <div className='flex gap-6 border-b-4'>
                        <h3 className='font-bold text-black'>Tags</h3>
                        {
                            tags.map(tag => <p className='text-[#23BE0A] font-medium'>#{tag}</p>)
                        }
                    </div>

                    {/* <div>
                        <div className='flex gap-5'>
                            <h2>Number of Pages:</h2>
                            <p>{totalPages}</p>
                        </div>
                        <div className='flex gap-5'>
                            <h2>Publisher:</h2>
                            <p>{publisher}</p>
                        </div>
                        <div className='flex gap-5'>
                            <h2>Year of Publishing:</h2>
                            <p>{yearOfPublishing}</p>
                        </div>
                        <div className='flex gap-5'>
                            <h2>Rating:</h2>
                            <p>{rating}</p>
                        </div>
                    </div> */}

                    <div className='flex gap-6 mt-9'>
                        <button className="border-2 border-gray-600 rounded-lg px-7">Read</button>
                        <button className="btn btn-active btn-accent">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
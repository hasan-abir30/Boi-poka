import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    console.log(book)
    const {bookId, image, bookName, author,tags,category } = book;


    return (
       <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-xl border-2 p-6">
            <figure className='bg-[#F3F3F3] py-8 rounded-2xl'>
                <img className='h-[166px]'
                    src={image}
                    alt='book' />
            </figure>
            <div className="card-body">
                <div className='flex gap-4 justify-between'>
                    {
                        tags.map(tag => <button className="btn btn-sm px-4 py-2 font-bold text-[#23BE0A] text-[20px]">{tag}</button>)
                    }
                    
                </div>
                <h2 className="card-title font-bold">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author}</p>
                <div class="border-dashed border-[1px] border-gray-600"></div>
                <div className="card-actions justify-between">
                    <div className="badge font-bold">{category}</div>
                    <div className="badge">
                        <span>5.00</span>
                        <span className='text-[20px]'><CiStar /></span>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;
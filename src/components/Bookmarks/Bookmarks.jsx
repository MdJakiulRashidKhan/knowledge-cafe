import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 text-center bg-gray-300 ml-4 pb-2'>
            <div>
                <h3 className='text-4xl'> Reading Time :{readingTime}</h3>
            </div>
            <h2 className='text-3xl'>Bookmarks:{bookmarks.length} </h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark  key={idx}  bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;
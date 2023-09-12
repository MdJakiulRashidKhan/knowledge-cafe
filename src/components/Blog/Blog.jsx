import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author,author_img,reading_time,posted_date,hashtags}=blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h4 className='text-2xl'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleBookmark(blog)} className='ml-2 text-red-600 font-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mb-4'>{title}</h2>
            <p>
                {hashtags.map((hash,idx)=> <span key={idx}> <a href="">#{hash}</a></span>)}
            </p>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-blue-800 mt-4 underline-offset-4'> Mark As Read</button>
        </div>
    );
};

export default Blog;
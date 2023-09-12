import React, { useState } from 'react';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';



const App = () => {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);

  const handleBookmark= (blog) =>{
    const newBookmark =[...bookmarks,blog]
    setBookmarks(newBookmark);
  }
  const handleMarkAsRead =(id,time)=>{
    setReadingTime(readingTime+time);
    const remainingBookmark = bookmarks.filter(bookmark =>bookmark.id !== id)
    setBookmarks(remainingBookmark);
  }
  return (
    <div>
     <Header></Header>
     <div className=' md:flex max-w-7xl mx-auto'>
     <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </div>
    
    </div>
  );
};

export default App;
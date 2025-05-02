import React from 'react'
import Navbar from './navbar/Navbar'
import NewsSection from './newsSection/NewsSection'
import Blogs from './blogs/Blogs'
import Widgets from './widgets/Widgets'


const NewsContent = () => {
  return (
    <div className="news-content flex flex-grow gap-8 p-8 ">
      <Navbar/>
    <NewsSection/>
      <Blogs/>
      <Widgets/>
  </div>
  )
}

export default NewsContent
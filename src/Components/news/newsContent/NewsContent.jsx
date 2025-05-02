import React from 'react'
import Navbar from './navbar/Navbar'
import NewsSection from './newsSection/NewsSection'
import Blogs from './blogs/Blogs'
import Weather from './weather/Weather'
import Calendar from './calendar/Calendar'

const NewsContent = () => {
  return (
    <div className="news-content">
      <Navbar/>
    <NewsSection/>
      <Blogs/>
      <Weather/>
      <Calendar/>
  </div>
  )
}

export default NewsContent
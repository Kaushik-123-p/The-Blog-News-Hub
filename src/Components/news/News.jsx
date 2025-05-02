import React from 'react'
import Header from '../header/Header'
import NewsContent from '../newsContent/NewsContent'
import Footer from '../footer/Footer'

const News = () => {
  return (
    <div className='news text-2xl text-white w-full h-full flex flex-col justify-between gap-2' >
      <Header/>
      <NewsContent/>
      <Footer/>
    </div>
  )
}

export default News

import React from 'react'
import Header from './header/Header'
import NewsContent from './newsContent/NewsContent'
import Footer from './footer/Footer'

const News = () => {
  return (
    <div className='news '>
      <Header/>
      <NewsContent/>
      <Footer/>
    </div>
  )
}

export default News

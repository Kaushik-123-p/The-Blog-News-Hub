import React from 'react'
import News from './Components/news/News'

const App = () => {
  return (
    <div className='Container  w-full h-screen bg-gradient-to-r from-teal-400 to-blue-500 text-white grid place-items-center'>
     <div className='news-blog-pp w-[95vw] h-[95vmin] mx-auto bg-zinc-900 rounded-lg shadow-4xl p-4 sm:p-6 lg:p-8'>
     <News/>
     </div>
    </div>
  )
}

export default App
import React from 'react'

const NewsSection = () => {
  return (
    <div className="news-section w-[clamp(30rem,43cqi,40%)] h-full rounded-2xl">
      <div className="headline w-full h-[calc(50%_-_2rem)] bg-zinc-900 rounded-2xl mb-8">Headline</div>
      <div className="news-grid w-full h-1/2 bg-zinc-900 rounded-2xl">News Grid</div>
    </div>
  )
}

export default NewsSection


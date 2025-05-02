import React from 'react'
import Weather from './weather/Weather'
import Calendar from './calendar/Calendar'

const Widgets = () => {
  return (
    <div className='widgets'>
        <Weather/>
        <Calendar/>
    </div>
  )
}

export default Widgets
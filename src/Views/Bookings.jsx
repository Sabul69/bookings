import React from 'react'
//Components
import Filter from '../Components/Bookings/Filter'
import Hub from '../Components/Bookings/Hub'
//Styles
import '../Styles/Booking/Booking.styles.css'

const Bookings = () => {
  return (
    <div className='contain m-auto'>
        <Filter/>
        <Hub/>
    </div>
  )
}

export default Bookings
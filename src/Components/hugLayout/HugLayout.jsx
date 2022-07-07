import React from 'react'
import UseStylesHugLayout from './UseStylesHugLayout'

const HugLayout = () => {
  UseStylesHugLayout();

  return (
    <div className='main-basic-layout'>
      <img className='hug-image' src='../assets/homePage/girl-and-pet.png' alt='girl-and-pet' />
      <div className='hug-backround'></div>
    </div>
  )
}

export default HugLayout
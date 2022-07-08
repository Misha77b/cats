import React from 'react'
import UseStylesHomeLayout from './UseStylesHomeLayout'

const HomeLayout = () => {
  UseStylesHomeLayout()
  return (
    <div className='main-basic-layout'>
      <img className='hug-image' src='../assets/homePage/girl-and-pet.png' alt='girl-and-pet' />
    </div>
  )
}

export default HomeLayout
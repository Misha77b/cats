import React from 'react'
import UseStylesHeader from './UseStylesHeader'

const Header = () => {
    UseStylesHeader();

  return (
    <div className='header'>
      <img className='logo-img' src="../assets/logo/logo.png" alt="logo" />
    </div>
  )
}

export default Header
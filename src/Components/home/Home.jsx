import React from 'react'
import UseStylesHome from './UseStylesHome'

const Home = () => {
  UseStylesHome()

  return (
    <div className='home'>
      <h2 className='home-title'>Hi intern!</h2>
      <span className='home-subtitle'>Welcome to MI 2022 Front-end test</span>

      <div className='home-menu-container'>
        <h2 className='home-starts-title'>Lets start using The Cat API</h2>

        <div className='home-menu'>
          <div className='btn-container'>
            <img className='vote-table' src="../assets/homepage/vote-table.png" alt="vote-table" />
            {/* btn */}
          </div>
          <div className='btn-container'>
            <img className='pet-breeds' src="../assets/homepage/pet-breeds.png" alt="pet-breeds" />
            {/* btn */}
          </div>
          <div className='btn-container'>
            <img className='images-search' src="../assets/homepage/images-search.png" alt="images-search" />
            {/* btn */}
          </div>
          
          {/* <img className='vote-table' src="../assets/homepage/vote-table.png" alt="vote-table" />
          <img className='pet-breeds' src="../assets/homepage/pet-breeds.png" alt="pet-breeds" />
          <img className='images-search' src="../assets/homepage/images-search.png" alt="images-search" /> */}
        </div>
      </div>
    </div>
  )
}

export default Home
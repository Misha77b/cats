import React from 'react';
import UseStylesHome from './UseStylesHome';
import Button from '@mui/material/Button';

const btnStyles = {
  fontFamily: "Jost",
  fontSize: '12px',
  fontWeight: '500',
  letterSpacing: '2px',
  width: '138px',
  height: '36px',
  borderRadius: '10px',
  textAlign: 'center',
  background: '#FFFFFF',
}

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
            <div className='menu-image-container vote-container'>
              <img className='home-image vote-table' src="../assets/homepage/vote-table.png" alt="vote-table" />
            </div>
            <Button
              // onClick={handleOpen}
              className='vote-btn home-btn'
              sx={btnStyles}
            >
              VOTING
            </Button>
          </div>

          <div className='btn-container'>
            <div className='menu-image-container breed-container'>
              <img className='home-image pet-breeds' src="../assets/homepage/pet-breeds.png" alt="pet-breeds" />
            </div>
            <Button
              // onClick={handleOpen}
              className='breeds-btn home-btn'  
              sx={btnStyles}          
            >
              BREEDS
            </Button>
          </div>

          <div className='btn-container'>
            <div className='menu-image-container search-container'>
              <img className='home-image images-search' src="../assets/homepage/images-search.png" alt="images-search" />
            </div>
            <Button
              // onClick={handleOpen}
              className='search-btn home-btn'
              sx={btnStyles}
            >
              GALLERY
            </Button>
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
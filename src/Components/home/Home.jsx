import React, { useState, useEffect } from 'react';
import UseStylesHome from './UseStylesHome';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import {
  Route,
  Link,
  Routes
} from "react-router-dom";
import Voting from '../voting/Voting'

const btnStyles = {
  fontFamily: "Jost",
  fontSize: '12px',
  fontWeight: '500',
  letterSpacing: '2px',
  color: '#FF868E',
  width: '138px',
  height: '36px',
  borderRadius: '10px',
  textAlign: 'center',
  background: '#FFFFFF',
}

const routes = [
  {
    path: "/votings",
    exact: true,
    main: () => <Voting />
  },
  {
    path: "/bubblegum",
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    main: () => <h2>Shoelaces</h2>
  }
];

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
              <Link to="/votings">VOTING</Link>
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
          <Routes>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
              />
            ))}
          </Routes>
          
          {/* <img className='vote-table' src="../assets/homepage/vote-table.png" alt="vote-table" />
          <img className='pet-breeds' src="../assets/homepage/pet-breeds.png" alt="pet-breeds" />
          <img className='images-search' src="../assets/homepage/images-search.png" alt="images-search" /> */}
        </div>
      </div>
    </div>
  )
}

export default Home
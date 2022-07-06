import React from 'react';
import {useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { getCats } from './API/cats/cats.thunks';
import Header from './Components/header/Header';
import Home from './Components/home/Home';

function App() {
  const dispatch = useDispatch();
  dispatch(getCats())
  
  return (
    <BrowserRouter>
      <div className="App">
        <div className='main-section'>
          <Header />
          <Home />
        </div>
        <div className='secondary-section'>
          <img src='../assets/homePage/girl-and-pet.png' alt='girl-and-pet' />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

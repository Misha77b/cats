import React from 'react';
import {useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { getCats } from './API/cats/cats.thunks';

function App() {
  const dispatch = useDispatch();
  dispatch(getCats())
  
  return (
    <BrowserRouter>
      <div className="App">
        Hello, Pets Paw
      </div>
    </BrowserRouter>
  );
}

export default App;

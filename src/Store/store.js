import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import catsReducer from "../API/cats/cats.reducer";
import breedsReducer from '../API/breeds/breeds.reducer';
import gallaryReducer from '../API/gallery/gallary.reducer';
import votingReducer from '../API/voting/voting.reducer';

const reduxDevToolsCompose = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];

const rootReducer = combineReducers({
  catsReducer,
  breedsReducer,
  gallaryReducer,
  votingReducer
});

const store = configureStore({
  devTools: reduxDevToolsCompose,
  reducer: rootReducer,
  middleware: [thunk],
});

export default store
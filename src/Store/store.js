import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import catsReducer from "../API/cats/cats.reducer"

const reduxDevToolsCompose = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];

const rootReducer = combineReducers({
  catsReducer
});

const store = configureStore({
  devTools: reduxDevToolsCompose,
  reducer: rootReducer,
  middleware: [thunk],
});

export default store
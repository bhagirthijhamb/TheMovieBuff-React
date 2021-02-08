import React, { createContext, useReducer } from 'react';
import appReducer from './appReducer';

export const AppContext = createContext();

const nominatedMoviesFromLS = localStorage.getItem('nominatedMovies') ? JSON.parse(localStorage.getItem('nominatedMovies')) : [];

const initialState = {
  loading: false,
  movies: [],
  nominatedMovies: nominatedMoviesFromLS,
  basketOpen: false
}

export const AppContextProvider = props => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return(
    <AppContext.Provider value = {[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  )
}


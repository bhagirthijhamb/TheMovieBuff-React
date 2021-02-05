import React, { createContext, useContet, useReducer } from 'react';

export const AppContext = createContext();

const nominatedMoviesFromLS = localStorage.getItems('movies') ? JSON.parse(localStorage.getItem('movies')) : [];

const initialState = {
  loadingMovies: false,
  movies: [],
  movie: '',
  nominatedMovies: nominatedMoviesFromLS,
  basketOpen: false
}
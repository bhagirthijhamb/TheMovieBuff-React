import { TOGGLE_BASKET, MOVIES_REQUEST, MOVIES_SUCCESS, NOMINATE_MOVIE, UNDO_NOMINATE_MOVIE } from './types';
const appReducer = (state, action) => {
  switch(action.type){
    case TOGGLE_BASKET:
      return { ...state, basketOpen: !state.basketOpen }
    case MOVIES_REQUEST:
      return { ...state, loading: true }
    case MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload }
    case NOMINATE_MOVIE:
      return { ...state, nominatedMovies: [ action.payload, ...state.nominatedMovies ]}
    case UNDO_NOMINATE_MOVIE:
      return { ...state, nominatedMovies: state.nominatedMovies.filter(movie => movie.imdbId !== action.payload)}
    default:
      return state;
  }
}

export default appReducer;
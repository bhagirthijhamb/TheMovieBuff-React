import React, { useEffect, useContext } from 'react';
import { AppContext } from './../context/appContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { TOGGLE_BASKET, UNDO_NOMINATE_MOVIE } from './../context/types';

const NominatedMovies = () => {
  const [ state, dispatch ] = useContext(AppContext);
  const { nominatedMovies } = state;

  const toggleBasket = () => {
    dispatch({ type: TOGGLE_BASKET });
  }
  const undoNominateMovie = (id) => {
    dispatch({ type: UNDO_NOMINATE_MOVIE, payload: id })
  }

  return (
    <section className="nominatedMovies_container">
      <span className="close_nominatedMovies">
        <FontAwesomeIcon icon={faWindowClose} className="close_icon" onClick={toggleBasket}/>
      </span>
      <h2>Nominee List</h2>
      <ul className="nominatedMovies_movieList">
        {nominatedMovies ? nominatedMovies.map(movie => (
          <li id={movie.imdbId} className="nominatedMovies_movieCard">
            <div className="nominatedMovies_movieThumbnail">
              {movie.Poster ? 
                <img src={movie.Poster} alt="Poster of movie" className="nominatedMovies_posterSize" /> 
                : 
                <div className="nominatedMovies_no-poster"> 
                  <FontAwesomeIcon icon={faFilm} className="movie_icon"/>
                  <p>No poster available</p>
                </div>
              }
            </div>
            <div className="nominatedMovies_movieContent">
              <p className="releasedOn">Released: {movie.ReleaseDate}</p>
              <h3>{movie.Title}</h3>
              <button id={movie.imdbId} className="removeBtn" onClick={() => undoNominateMovie(movie.imdbId)}>Remove</button>
            </div>
          </li>
        )) : <div></div>}
      </ul>
    </section>
  )
}

export default NominatedMovies;

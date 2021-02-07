import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm }  from '@fortawesome/free-solid-svg-icons';
import { AppContext } from './../context/appContext';
import { TOGGLE_BASKET } from './../context/types';

const Navbar = () => {
  const [ state, dispatch ] = useContext(AppContext);
  const { basketOpen, nominatedMovies } = state;

  console.log(basketOpen, nominatedMovies);

  const toggleBasket = () => {
    dispatch({ type: TOGGLE_BASKET })
  }

  return (
    <div className="fixed_container">
      <nav>
        <div className="wrapper">
          <button className="movie-button">
            <FontAwesomeIcon icon={faFilm} className="movie_icon" onClick={toggleBasket} />
            <span className="nomineeNotification">{nominatedMovies && nominatedMovies.length}</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
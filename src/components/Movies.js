import React, { useEffect, useContext } from 'react';
import { AppContext } from './../context/appContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { NOMINATE_MOVIE } from './../context/types';

const Movies = () => {
  const [state, dispatch] = useContext(AppContext);
  const { movies, nominatedMovies } = state;

  
  const handleNominate = (movie) => {
    console.log(movie);
    if(nominatedMovies.length < 5){
      const nominatedMovie = {
        Poster: `http://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        ReleaseDate: movie.release_date,
        Title: movie.original_title,
        imdbId: movie.id
      }
      // nominateMovie(nominatedMovie);
      dispatch({ type: NOMINATE_MOVIE, payload: nominatedMovie });
      
    }
    console.log('nominatedMovies', nominatedMovies)
  }
  
  useEffect(() => {
    localStorage.setItem('nominatedMovies', JSON.stringify(nominatedMovies));
  }, [nominatedMovies])
  
  let nominatedMoviesIds;

  if(nominatedMovies) {
      nominatedMoviesIds = nominatedMovies.map(movie => movie.imdbId)
      console.log(nominatedMoviesIds);
  }

  return (
    <section>
      {movies && movies.length > 0 && 
        <div className="movieResults_container">
          <div className="wrapper movieResults_gridContainer">
            <h2>Pick Your Flicks</h2>
            {/* {!basketOpen &&  */}
            <ul className="movieResults_movieList">
                {movies.map(movie => (
                  <li id={movie.id} className="movieResults_movieCard">
                    <div className="movieResults_movieThumbnail">
                      {movie.poster_path ? 
                        <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Poster of movie" className="posterSize" /> 
                        : 
                        <div className="no-poster"> 
                          <FontAwesomeIcon icon={faFilm} className="movie_icon"/>
                          <p>No poster available</p>
                        </div>}
                    </div>
                      <div className="movieResults_movieContent">
                        <p>Released on {movie.release_date}</p>
                        <h3>{movie.original_title}</h3>
                      </div>
                      <div className="movieResults_btnContainer">
                        {nominatedMoviesIds.length > 0 && nominatedMoviesIds.indexOf(movie.id) !== -1
                        ? 
                        <button disabled id={movie.id} className="" >Nominated</button>
                        : 
                        <button id={movie.id} className="" onClick={() => handleNominate(movie)}>Nominate</button>      
                        }
                      </div>
                  </li>
                ))}
              </ul>
              {/* } */}
          </div>
      </div>
      }
    </section>
  )
}

export default Movies

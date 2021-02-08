import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from './../context/appContext';
import { MOVIES_REQUEST, MOVIES_SUCCESS } from '../context/types';
import Movies from './Movies';

const Main = () => {
  const [movie, setMovie] = useState('');
  const [state, dispatch] = useContext(AppContext);

  const fetchMovies = async(movie) => {
    try {
      dispatch({ type: MOVIES_REQUEST });
      const url = new URL('https://api.themoviedb.org/3/search/movie')
      const params = {
        api_key: "676b5c3c59b0364795481293b3792d6d",
        language: "en-US",
        query: movie,
        sort_by: "popularity.desc",
        include_adult: "false",
        include_video: "false",
        page: 1
      }
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

      const response = await fetch(url);
      const result = await response.json();
      console.log(result.results);    
      dispatch({ type: MOVIES_SUCCESS, payload: result.results })
    } catch(error){
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(movie)
  }
  return (
    <main>
      <section>
        <div className="searchMovie_container">
          <div className="searchMovie_backgroundPattern">
            <div className="wrapper searchMovie-area" id="search-area">
              <h2>Search Movie</h2>
              <ul className="instructions">
                <li className="instructionsItem">
                  <span>1</span><p>Search for a movie title</p>
                </li>
                <li className="instructionsItem">
                  <span>2</span><p>Click nominate to add your movie (you may pick a max of 5 movies).</p>
                </li>
                <li className="instructionsItem">
                  <span>3</span><p>Change your mind? Click the film icon and click remove to edit your list.</p>
                </li>
                <li className="instructionsItem">
                  <span>4</span><p>Once you're satisfied with your nominees list, you're done!</p>
                </li>
              </ul>
              <form action="inout" onSubmit={handleSubmit}>
                <label htmlFor="movie" className="srOnly">Search Movie</label>
                <input value={movie} type="text" id="movie" 
                onChange={(e) => setMovie(e.target.value)} 
                placeholder="Enter your movie title..." />
                <button type="submit" aria-label="submit search">
                    <FontAwesomeIcon icon={faSearch} className="search_icon"/>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Movies />
    </main>
  )
}

export default Main

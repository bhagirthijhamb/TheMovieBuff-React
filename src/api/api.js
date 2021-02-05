const API_URL = 'https://api.themoviedb.org/3/search/movie';

export async function fetchMovies(){
  const response = await fetch(API_URL);
  const result = await response.json();
  return result;
}
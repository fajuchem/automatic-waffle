import { getFromDb } from './get-from-db';

export function getMovies() {
  const movies = getFromDb('movies');

  return movies;
}

export function getMoviesGenre() {
  return {
    genre: getMovies().data.map((movie) => movie.genre),
  };
}

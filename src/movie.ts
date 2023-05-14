import { getFromDb } from './get-from-db';

export function getMovies() {
  const movies = getFromDb();

  return {
    movies,
    moviesByGenre: getMoviesByGenre(),
  };
}

export function getMoviesByGenre() {
  return 100;
}

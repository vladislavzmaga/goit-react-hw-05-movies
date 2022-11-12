import { fetchMovieByTrending } from 'components/API/API';
import {
  MoviesWrapper,
  MovieList,
  MoviesItem,
  MoviesNavLink,
} from 'components/Movies/Movies.styled';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovieByTrending().then(respounse => {
      const result = respounse.data.results;
      setMovies(result);
    });
  }, []);

  if (movies === []) {
    return;
  }

  return (
    <MoviesWrapper>
      {movies.length > 0 && (
        <MovieList>
          {movies.map(movie => {
            return (
              <MoviesItem key={movie.id}>
                <MoviesNavLink
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.title || movie.name}
                </MoviesNavLink>
              </MoviesItem>
            );
          })}
        </MovieList>
      )}
    </MoviesWrapper>
  );
};

export default MoviesList;

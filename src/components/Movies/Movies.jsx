import { fetchMovieByName } from 'components/API/API';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  MoviesWrapper,
  MoviesInput,
  MoviesButton,
  MovieList,
  MoviesItem,
  MoviesNavLink,
} from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get('query');
  const location = useLocation();

  const handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.target.name.value;
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!currentValue) {
      return;
    }
    setError(null);
    fetchMovieByName(currentValue).then(respounse => {
      if (respounse.data.total_results === 0) {
        setError('Nothing was found according to your request!!');
      }
      const result = respounse.data.results;
      setMovies(result);
    });
  }, [currentValue]);

  return (
    <MoviesWrapper>
      <h1>Enter the name of the movie!</h1>
      <form onSubmit={handleSubmit}>
        <MoviesInput type="text" name="name" />
        <MoviesButton type="submit">Search</MoviesButton>
      </form>
      <div>
        {error && <h2>{error}</h2>}
        {movies && (
          <MovieList>
            {movies.map(movie => {
              return (
                <MoviesItem key={movie.id}>
                  <MoviesNavLink to={`${movie.id}`} state={{ from: location }}>
                    {movie.title || movie.name}
                  </MoviesNavLink>
                </MoviesItem>
              );
            })}
          </MovieList>
        )}
      </div>
    </MoviesWrapper>
  );
};

export default Movies;

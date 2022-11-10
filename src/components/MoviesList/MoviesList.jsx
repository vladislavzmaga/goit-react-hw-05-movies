import { fetchMovieByTrending } from 'components/API/API';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const MoviesList = () => {
  const [movies, setMovies] = useState([]);

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
    <div>
      {movies.length > 0 && (
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <NavLink to={`/movies/${movie.id}`}>
                  {movie.title || movie.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

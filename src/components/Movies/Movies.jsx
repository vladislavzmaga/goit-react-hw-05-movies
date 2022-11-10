import { fetchMovieByName } from 'components/API/API';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Movies = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setValue(evt.target.name.value);
  };

  useEffect(() => {
    if (value === '') {
      return;
    }
    fetchMovieByName(value).then(respounse => {
      const result = respounse.data.results;
      setMovies(result);
    });
  }, [value]);

  if (movies === []) {
    return;
  }

  return (
    <div>
      <h1>Enter the name of the movie!</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">submit</button>
      </form>
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
    </div>
  );
};

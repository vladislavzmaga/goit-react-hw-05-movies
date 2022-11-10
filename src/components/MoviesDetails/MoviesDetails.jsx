import { fetchMovieById } from 'components/API/API';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export const MoviesDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const IMG_REGUEST = 'https://image.tmdb.org/t/p/w342';

  useEffect(() => {
    fetchMovieById(params.movieId)
      .then(respounse => {
        const movieInfo = respounse.data;
        setMovie(movieInfo);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [params.movieId]);

  console.log(error);

  if (!movie) {
    return;
  }

  return (
    <div>
      {error.length > 0 && <h1>No additional information yet!</h1>}
      <button type="button">Go Back!</button>
      <div>
        <div>
          <img
            src={IMG_REGUEST + movie.poster_path}
            alt={movie.title || movie.name}
          />
        </div>
        <div>
          <ul>
            <li>
              <h2>{movie.title || movie.name}</h2>
              <p>User score {movie.vote_average * 10} %</p>
            </li>
            <li>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </li>
            <li>
              <h2>Genres</h2>
              <p>
                {movie.genres.map(genre => {
                  return <span key={genre.id}>{genre.name}</span>;
                })}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to={'cast'}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={'reviews'}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

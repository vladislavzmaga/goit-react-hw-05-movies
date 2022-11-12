import { fetchMovieById } from 'components/API/API';
import { MoviesNavLink } from 'components/Movies/Movies.styled';
import { useEffect, useState, Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  MoviesDetailsWrapper,
  MoviesDetailsButton,
  MoviesDetailsMainWrapper,
  MoviesInformationBox,
  MoviesDetailsList,
  MoviesAditionalInformation,
  MoviesAdditionalInformationList,
  MoviesAdditionalInformationItem,
  MoviesDetailsGenres,
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const nav = useRef(location);
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

  return (
    <MoviesDetailsMainWrapper>
      <MoviesDetailsButton to={nav.current.state?.from ?? '/movies'}>
        Go Back!
      </MoviesDetailsButton>
      {error && <h1>There is no detailed information about the film!!!</h1>}
      {movie && (
        <MoviesInformationBox>
          <MoviesDetailsWrapper>
            <div>
              <img
                src={IMG_REGUEST + movie.poster_path}
                alt={movie.title || movie.name}
              />
            </div>
            <div>
              <MoviesDetailsList>
                <li>
                  <h2>{movie.title || movie.name}</h2>
                  <p>User score {(movie.vote_average * 10).toFixed()} %</p>
                </li>
                <li>
                  <h2>Overview</h2>
                  <p>{movie.overview}</p>
                </li>
                <li>
                  <h2>Genres</h2>
                  <MoviesDetailsGenres>
                    {movie.genres.map(genre => {
                      return <li key={genre.id}>{genre.name}</li>;
                    })}
                  </MoviesDetailsGenres>
                </li>
              </MoviesDetailsList>
            </div>
          </MoviesDetailsWrapper>
          <MoviesAditionalInformation>
            <h3>Additional information</h3>
            <MoviesAdditionalInformationList>
              <MoviesAdditionalInformationItem>
                <MoviesNavLink to={'cast'}>Cast</MoviesNavLink>
              </MoviesAdditionalInformationItem>
              <MoviesAdditionalInformationItem>
                <MoviesNavLink to={'reviews'}>Reviews</MoviesNavLink>
              </MoviesAdditionalInformationItem>
            </MoviesAdditionalInformationList>
          </MoviesAditionalInformation>
        </MoviesInformationBox>
      )}

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MoviesDetailsMainWrapper>
  );
};

export default MoviesDetails;

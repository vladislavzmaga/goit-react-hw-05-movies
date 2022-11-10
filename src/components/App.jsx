import { Route, Routes } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Layout } from './Layout/Layout';
import { Movies } from './Movies/Movies';
import { MoviesDetails } from './MoviesDetails/MoviesDetails';
import { MoviesList } from './MoviesList/MoviesList';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MoviesList />}></Route>
          <Route path="/" element={<MoviesList />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

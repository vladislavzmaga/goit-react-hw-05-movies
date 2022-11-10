import axios from 'axios';

const API_KEY = '9a777d591b15a4fcb1951681e4c73cdf';

export const fetchMovieByTrending = async () => {
  const respounse = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  return respounse;
};

export const fetchMovieByName = async name => {
  const respounce = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}`
  );
  return respounce;
};

export const fetchMovieById = async id => {
  const respounce = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return respounce;
};

export const fetchMovieCast = async id => {
  const respounce = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
  return respounce;
};

export const fetchMovieReviews = async id => {
  const respounce = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return respounce;
};

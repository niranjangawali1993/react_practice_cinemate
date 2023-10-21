import http from './../http-common';

const getMovies = (pageNo, url) => {
  return http.get(`${url}?page=${pageNo}`);
};

const searchMovies = (url) => {
  return http.get(`${url}`);
};

const getMovieDetailsById = (id) => {
  return http.get(`/movie/${id}`);
};

const MoviesService = {
  getMovies,
  searchMovies,
  getMovieDetailsById,
};

export default MoviesService;

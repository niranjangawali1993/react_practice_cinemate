import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, Search, PageNotFound } from '../pages';

const AllRoutes = () => {
  return (
    <div className='dark:bg-slate-800'>
      <Routes>
        <Route
          path='/'
          element={<MovieList apiUrl='movie/now_playing' title='Home' />}
        />
        <Route path='movies/:id' element={<MovieDetail />} />
        <Route
          path='movies/popular'
          element={<MovieList apiUrl='movie/popular' title='Popular' />}
        />
        <Route
          path='movies/top'
          element={<MovieList apiUrl='movie/top_rated' title='Top Rated' />}
        />
        <Route
          path='movies/upcoming'
          element={<MovieList apiUrl='movie/upcoming' title='Upcoming' />}
        />
        <Route path='search' element={<Search apiUrl='search/movie' />} />
        <Route path='*' element={<PageNotFound title='Page Not Found' />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;

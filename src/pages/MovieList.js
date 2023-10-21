import React from 'react';
import MovieCard from '../components/MovieCard';
import useFetch from '../hooks/useFetch';
import useTitle from '../hooks/useTitle';

const MovieList = ({ apiUrl, title }) => {
  const movies = useFetch(1, apiUrl, '');

  useTitle(title);

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {movies.map((movieInfo) => {
            return <MovieCard key={movieInfo.id} movieInfo={movieInfo} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default MovieList;

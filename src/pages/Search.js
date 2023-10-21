import React from 'react';
import useFetch from '../hooks/useFetch';
import MovieCard from '../components/MovieCard';
import { useSearchParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const Search = ({ apiUrl }) => {
  console.log('SEARCH : ', apiUrl);
  const [searchParams] = useSearchParams();
  const queryTerms = searchParams.get('q');
  const movies = useFetch(1, apiUrl, queryTerms);

  useTitle(`Search results for ${queryTerms}`);

  return (
    <main>
      <section>
        <p className='text-3xl text-gray-700 dark:text-white'>
          {movies.length === 0
            ? 'No results found'
            : `Results for '${queryTerms}'`}
        </p>
      </section>
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

export default Search;

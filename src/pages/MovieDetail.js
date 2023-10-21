import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviesService from '../service/MoviesService';
import backUpImage from './../assets/images/backup.png';
import useTitle from '../hooks/useTitle';

const MovieDetail = () => {
  const params = useParams();

  const [movieDetails, setMovieDetails] = useState(null);

  const movieImage = movieDetails?.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
    : backUpImage;

  useEffect(() => {
    const id = params.id;
    async function getMovieDetails() {
      const result = await MoviesService.getMovieDetailsById(id);
      setMovieDetails(result?.data);
    }
    getMovieDetails();
  }, [params]);

  useTitle(movieDetails?.title);

  return (
    <main className='min-h-90vh max-w-7xl mx-auto p-3'>
      <section className='flex justify-around flex-wrap py-5'>
        <div className='max-w-sm'>
          <img className='rounded' src={movieImage} alt={movieDetails?.title} />
        </div>
        <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
          <h1 className='text-4xl font-bold my-3 text-center lg:text-left'>
            {movieDetails?.title}
          </h1>
          <p className='my-4 text-gray-700 dark:text-white'>
            {movieDetails?.overview}
          </p>
          <div className='flex my-5 flex-wrap'>
            {movieDetails?.genres.map((genre) => {
              return (
                <div className='p-2 border rounded mr-3 text-gray-700 dark:text-white'>
                  {genre.name}
                </div>
              );
            })}
          </div>
          <div className='flex items-center'>
            <svg
              aria-hidden='true'
              class='w-5 h-5 text-yellow-400'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Rating star</title>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
            </svg>
            <p className='ml-2 mr-0.5 text-gray-700 dark:text-white'>
              {movieDetails?.vote_average}
            </p>
            <span class='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400'></span>
            <p className='text-gray-700 dark:text-white'>
              {movieDetails?.vote_count} reviews
            </p>
          </div>
          <p className='mt-4'>
            <span className='text-gray-700 dark:text-white font-bold mr-2'>
              Runtime:
            </span>
            {movieDetails?.runtime}
          </p>
          <p className='mt-4'>
            <span className='text-gray-700 dark:text-white font-bold mr-2'>
              Budget:
            </span>
            {movieDetails?.budget}
          </p>
          <p className='mt-4'>
            <span className='text-gray-700 dark:text-white font-bold mr-2'>
              Revenue:
            </span>
            {movieDetails?.revenue}
          </p>
          <p className='mt-4'>
            <span className='text-gray-700 dark:text-white font-bold mr-2'>
              Release Date:
            </span>
            {movieDetails?.release_date}
          </p>
          <p className='mt-4'>
            <span className='text-gray-700 dark:text-white font-bold mr-2'>
              IMDB Code:
            </span>
            {movieDetails?.imdb_id}
          </p>
        </div>
      </section>
    </main>
  );
};

export default MovieDetail;

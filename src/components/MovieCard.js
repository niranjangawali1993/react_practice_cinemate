import React from 'react';
import { Link } from 'react-router-dom';
import backUpImage from './../assets/images/backup.png';

const MovieCard = ({ movieInfo }) => {
  const { poster_path, title, overview, id } = movieInfo;
  const movieImage = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : backUpImage;

  return (
    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3'>
      <Link to={`/movies/${id}`}>
        <img className='rounded-t-lg' src={movieImage} alt='Movie Poster' />
      </Link>
      <div className='p-5'>
        <Link to={`/movies/${id}`}>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h5>
        </Link>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {overview}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;

import React, { useEffect } from 'react';
import pageNotFoundImage from './../assets/images/pagenotfound.png';
import { Link } from 'react-router-dom';
import { Button } from '../components';

const PageNotFound = ({ title }) => {
  useEffect(() => {
    document.title = `${title} / Cinemate`;
  });

  // useTitle(title);

  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-gray-700 dark:text-white my-10 font-bold'>
            404, Oops!{' '}
          </p>
          <div className='max-w-lg'>
            <img
              className='rounded'
              src={pageNotFoundImage}
              alt='Page Not Found'
            />
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <Link to='/'>
            {/* <button className='w-64 bg-blue-700 p-2 rounded font-medium text-white'>Temp</button> */}
            <Button>Back to Cinemate</Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;

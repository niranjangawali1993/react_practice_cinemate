import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-white shadow dark:bg-gray-900'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2030{' '}
          <Link to='/' className='hover:underline'>
            Cinemate
          </Link>
          . All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <Link
              to='/'
              className='mr-4 hover:underline md:mr-6'
              target='_blank'
              rel='noreferrer'
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='mr-4 hover:underline md:mr-6'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='mr-4 hover:underline md:mr-6'
              target='_blank'
              rel='noreferrer'
            >
              Youtube
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className='hover:underline'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

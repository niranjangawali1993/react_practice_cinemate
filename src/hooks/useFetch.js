import { useEffect, useState } from 'react';
import MoviesService from '../service/MoviesService';

const useFetch = (pageNo, url, queryTerm = '') => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getMovies() {
      let movieUrl = url;
      let output;
      if (queryTerm) {
        console.log('Query Terms are passed');
        movieUrl = `${url}?query=${queryTerm}`;
        output = await MoviesService.searchMovies(movieUrl);
      } else {
        output = await MoviesService.getMovies(pageNo, movieUrl);
      }
      console.log('pageNo: ', 1);
      console.log('url : ', url);
      console.log('queryTerm : ', queryTerm);

      setData(output?.data?.results);
    }
    getMovies();
  }, [url, pageNo, queryTerm]);

  return data;
};

export default useFetch;

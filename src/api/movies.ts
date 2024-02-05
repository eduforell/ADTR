import axios from 'axios';
import { API } from './config';

const keyAPI = '&apikey=e10af0d4';

const getMovie = (imdbID: string) =>
  axios.get(`http://www.omdbapi.com/?i=${imdbID}${keyAPI}`);

const getMoviesList = () =>
  axios.get(`http://www.omdbapi.com/?s=${API}${keyAPI}`);

const searchMovieList = (searchInput: string) =>
  axios.get(`http://www.omdbapi.com/?s=${searchInput}${keyAPI}`);

export { getMovie, getMoviesList, searchMovieList };

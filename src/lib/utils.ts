import handleError from '../utils/error';
import { getMovie } from '../api/movies';
import { Movie } from '../types/movie';

const fetchMovie = (setData: (data: Movie) => void, imdbID?: string) => {
  if (!imdbID) return;

  (async () => {
    try {
      const response = await getMovie(imdbID);
      setData(response.data);
    } catch (error) {
      handleError(error);
    }
  })();
};

export { fetchMovie };

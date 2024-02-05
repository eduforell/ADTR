import { Link } from 'react-router-dom';
import { Movie } from '../../types/movie';
import MovieCard from '../MovieCard/MovieCard';
import * as s from './styled';

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <s.GridContainer>
      {movies.map((movie) => (
        <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
          <MovieCard key={movie.imdbID} movie={movie} />
        </Link>
      ))}
    </s.GridContainer>
  );
};

export default MovieGrid;

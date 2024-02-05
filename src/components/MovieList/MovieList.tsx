import { Movie } from '../../types/movie';
import * as s from './styled';

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <s.ListForMovies>
      {movies.map((movie) => (
        <s.StyledLink key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
          <s.ListItem key={movie.imdbID}>
            <s.MovieTitle>{movie.Title}</s.MovieTitle>
            <s.MovieDetails>{`Year: ${movie.Year}, Type: ${movie.Type}`}</s.MovieDetails>
          </s.ListItem>
        </s.StyledLink>
      ))}
    </s.ListForMovies>
  );
};

export default MovieList;

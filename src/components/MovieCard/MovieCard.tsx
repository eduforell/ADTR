import { Link } from 'react-router-dom';
import * as s from './styled';
import { Movie } from '../../types/movie';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <s.CardContainer>
      <s.PosterImage src={movie.Poster} alt={movie.Title} />
      <s.ContentWrapper>
        <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
          <s.Title>{movie.Title}</s.Title>
          <s.Type>
            {movie.Type} - Year: {movie.Year}
          </s.Type>
        </Link>
      </s.ContentWrapper>
    </s.CardContainer>
  );
};

export default MovieCard;

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
        <s.Title>{movie.Title}</s.Title>
        <s.Type>
          {movie.Type} - Year: {movie.Year}
        </s.Type>
      </s.ContentWrapper>
    </s.CardContainer>
  );
};

export default MovieCard;

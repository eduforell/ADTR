import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Movie as IMovie } from '../../types/movie';
import { fetchMovie } from '../../lib/utils';
import * as s from './styled';

type MovieName = {
  id: string;
};

const MovieDetails = () => {
  const { id } = useParams<MovieName>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    fetchMovie(setMovie, id);

    if (!id) {
      console.log('No id found, navigating to not-found');
      navigate('/not-found');
      return;
    }
  }, [id, navigate]);

  return (
    <s.Container>
      <s.MovieImage src={movie?.Poster} alt={movie?.Title} />
      <s.MovieDetailsContainer>
        <s.MovieTitle>{movie?.Title}</s.MovieTitle>
        <s.MovieInfo>
          <b>Type:</b> {movie?.Type}
        </s.MovieInfo>
        <s.MovieInfo>
          <b>Year:</b> {movie?.Year}
        </s.MovieInfo>
      </s.MovieDetailsContainer>
    </s.Container>
  );
};

export default MovieDetails;

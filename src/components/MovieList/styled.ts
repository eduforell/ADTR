import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const ListForMovies = styled.ul`
  list-style: none;
  padding: 14px;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;

  &:hover {
    background-color: #f0f0f0;
  }

  & > div {
    margin-bottom: 8px;
  }
`;

export const MovieTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const MovieDetails = styled.div`
  font-size: 0.9rem;
  color: #555;
`;

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #e41e89;
  }
`;

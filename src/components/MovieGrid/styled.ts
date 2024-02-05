import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 3rem;
  list-style: none;
  padding: 12px;
  margin: 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #e41e89;
  }
`;

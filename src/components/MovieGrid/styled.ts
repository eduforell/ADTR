import styled from '@emotion/styled';

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 3rem;
  list-style: none;
  padding: 12px;
  margin: 0;
`;

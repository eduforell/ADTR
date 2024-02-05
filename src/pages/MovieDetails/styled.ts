import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const MovieImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const MovieDetailsContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const MovieTitle = styled.h1`
  font-size: 2rem;
  color: #84229d;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const MovieInfo = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

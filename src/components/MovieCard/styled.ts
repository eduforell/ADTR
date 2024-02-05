// MovieCard.js
import styled from '@emotion/styled';

export const CardContainer = styled.div`
  margin: 16px;
  max-width: 300px;
  text-align: center;
  position: relative;
  min-width: 250px;
  text-decoration: none;
`;

export const PosterImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ContentWrapper = styled.div`
  padding: 16px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  text-decoration: none;
`;

export const Type = styled.p`
  color: #333;
`;

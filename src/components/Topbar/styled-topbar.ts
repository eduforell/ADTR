import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  background-color: #84229d;
  min-height: 80px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 18px;
  padding-left: 18px;
  text-decoration: none;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    min-height: 50px;
    max-height: 60px;
  }
`;

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #ffae00;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  font-family: sans-serif;
  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

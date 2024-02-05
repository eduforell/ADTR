import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

// Home styles

export const MainPage = styled.div`
  align-items: center;
  justify-content: center;
`;

// Navbar styles

export const NavbarContainer = styled.nav`
  background-color: #84229d;
  max-height: 120px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
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
  color: #fff;
  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

// Search input

export const SearchInput = styled.input`
  background-color: #fff;
  color: #000;
  border-radius: 12px;
  border: none;
  padding: 6px;
  min-width: 50%;
  min-height: 20px;
  @media (max-width: 768px) {
    min-width: 80%;
  }
`;

// Search results

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const SortAndFiltering = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  gap: 16px;
`;

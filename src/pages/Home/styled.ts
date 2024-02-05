import styled from '@emotion/styled';
import { Link as RouterLink } from 'react-router-dom';

// Home styles

export const MainPage = styled.div`
  align-items: center;
  justify-content: center;
`;

export const StyledH1 = styled.h1`
  font-size: 2rem;
  color: #000;
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
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// Button and select for Sort and Filtering

export const SortAndFiltering = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  gap: 16px;
`;

export const StyledButton = styled.button`
  background-color: #84229d;
  color: #ffffff;
  padding: 10px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    color: #84229d;
    border: 1px solid #84229d;
  }
`;

export const StyledSelect = styled.select`
  background-color: #84229d;
  color: #ffffff;
  padding: 10px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  min-width: 120px;
`;

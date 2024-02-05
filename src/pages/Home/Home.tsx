import React, { useState, ChangeEvent } from 'react';
import * as s from './styled';
import { searchMovieList } from '../../api/movies';
import { Movie } from '../../types/movie';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const [searchMovie, setSearchMovie] = useState<Array<Movie>>([]);
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterType, setFilterType] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const haveResults = Array.isArray(searchMovie) && searchMovie.length > 0;

  const handleSearch = async () => {
    try {
      const response = await searchMovieList(searchInput);
      setSearchMovie(response.data.Search);
    } catch (error) {
      console.error('Error searching movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = event.target.value;
    setFilterType(selectedType === 'all' ? null : selectedType);
  };

  const handleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <>
      <s.MainPage>
        <s.NavbarContainer>
          <s.StyledLink to="/">
            <s.Logo>EcoMovies</s.Logo>
          </s.StyledLink>
          <s.SearchInput
            placeholder="Search your movie here :)"
            value={searchInput}
            onKeyDown={handleKeyPress}
            onChange={handleChange}
          />
        </s.NavbarContainer>
        <>
          <s.FilterContainer>
            <h1>
              {isLoading
                ? 'Hello! :)'
                : haveResults
                ? 'Results'
                : '😔 No Results'}
            </h1>
            {!isLoading && haveResults && (
              <>
                <s.SortAndFiltering>
                  <button onClick={handleSortOrder}>Sort by Year</button>
                  <select onChange={handleFilter}>
                    <option value="all">All</option>
                    <option value="movie">Movies</option>
                    <option value="series">Series</option>
                  </select>
                </s.SortAndFiltering>
              </>
            )}
          </s.FilterContainer>
          {!isLoading ? (
            haveResults ? (
              <MovieGrid
                movies={searchMovie
                  .filter(
                    (movie) =>
                      !filterType || (movie && movie.Type === filterType)
                  )
                  .sort((a, b) =>
                    sortOrder === 'asc'
                      ? a.Year.localeCompare(b.Year)
                      : b.Year.localeCompare(a.Year)
                  )}
              />
            ) : (
              <p>Sorry, it looks like we don't have anything with that name.</p>
            )
          ) : null}
        </>
        <Footer />
      </s.MainPage>
    </>
  );
};

export default Home;

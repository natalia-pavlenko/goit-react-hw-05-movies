import MoviesSearch from 'components/MoviesSearch/MoviesSearch';
import { getSearchMovie } from 'servises/axios-api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const searchSubmit = query => {
    setSearchParams({ q: query });
  };
  const searchQuery = searchParams.get('q');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const getSearch = async () => {
      setIsLoading(true);
      try {
        const moviesSearch = await getSearchMovie(searchQuery);
        console.log(moviesSearch);
        if (moviesSearch.length === 0) {
          return <p>not found</p>;
        }
        setMovies(moviesSearch);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getSearch();
  }, [searchQuery]);

  return (
    <>
      <MoviesSearch searchSubmit={searchSubmit} />
      {isLoading && <p>Loading...</p>}
      {movies && <MoviesList data={movies} />}
      {error && <p> Oops...</p>}
    </>
  );
};
export default Movies;

import { getTrendingMovies } from 'servises/axios-api';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getTrending = async () => {
      setIsLoading(true);
      try {
        const moviesTrend = await getTrendingMovies();
        if (!moviesTrend) {
          return <p>not found</p>;
        }
        setMovies(moviesTrend);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTrending ();
  }, []);
  
return (
  <>
  <h1>Trending today</h1>
  {isLoading && <p>Loading...</p>}
  {movies &&  <MoviesList data={movies} /> }
  {error && <p> Oops...</p>}
  </>
)
};
export default Home;

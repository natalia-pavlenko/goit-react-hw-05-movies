import { getTrendingMovies } from 'components/servises/axios-api';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect( () => {
    getTrendingMovies().then(data =>setMovies(data) );
  }, []);
  return <MoviesList data={movies} />;
};
export default Home;

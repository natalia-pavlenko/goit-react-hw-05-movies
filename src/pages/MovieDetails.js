import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getMovieDetails } from 'servises/axios-api';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import BackLink from 'components/BackLink';


const MovieDetailsPage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location?.state?.from ?? '/';
  const backlinkRef = useRef(backLinkHref);

  useEffect(() => {
    const getDetails = async () => {
      setIsLoading(true);
      try {
        const moviesDetails = await getMovieDetails(movieId);
        console.log(moviesDetails);
        if (!moviesDetails) {
          return <p>not found</p>;
        }
        setMovies(moviesDetails);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getDetails();
  }, [movieId]);

  return (
    <>
    <div>
    <BackLink to={backlinkRef.current}>Back to list</BackLink>
    </div>
      {isLoading && <p>Loading...</p>}
      {movies && <MovieDetails data={movies} />}
      {error && <p> Oops...</p>}
    </>
  );
};
export default MovieDetailsPage;

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servises/axios-api';
import Reviews from 'components/Reviews/Reviews';

const ReviewsPage = () => {
  const [movieReviews, setMovieReviews] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      setIsLoading(true);
      try {
        const getReviews = await getMovieReviews(movieId);

        console.log(getReviews);

        setMovieReviews(getReviews);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {movieReviews && <Reviews data={movieReviews} />}
      {error && <p> Oops...</p>}
    </>
  );
};

export default ReviewsPage;

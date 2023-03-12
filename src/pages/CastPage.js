import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servises/axios-api';
import Cast from 'components/Cast/Cast';

const CastPage = () => {
const [movieCast, setMovieCast] = useState([]);
  
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState('');
const { movieId } = useParams();

useEffect(() => {
  const getCredits = async () => {
    setIsLoading(true);
    try {
      const getCredits = await getMovieCredits();
      if (!getCredits) {
        return <p>not found</p>;
      }
      setMovieCast(getCredits);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  getCredits ();
}, []);
return (
<>
{isLoading && <p>Loading...</p>}
{movieCast &&  <Cast data={movieId}/>}
{error && <p> Oops...</p>}
</>

)
};

export default CastPage;
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = ({ data }) => {
  return (
    <>
      {data && (
        <div>
          {data && data.title}
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
            alt={data.title}
          />
          <p> {data.overview}</p>
          {data.genres.map(item => {
            return <p key={item.id}>{item.name}</p>;
          })}
        </div>
      )}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Outlet />
    </>
  );
};
export default MovieDetails;

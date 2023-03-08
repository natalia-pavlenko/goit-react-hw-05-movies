import { Link } from 'react-router-dom';

const MoviesList = ({ data }) => {
  return (
    <ul>
      {data.map(({ id, original_title }) => (
        <li key={id}>
          <Link>{original_title}</Link>{' '}
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;

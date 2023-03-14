import { Link } from 'react-router-dom';
import { List } from './MoviesList.styled';
import PropTypes from 'prop-types';

const MoviesList = ({data}) => {
  return (
    <List>
      {data.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{original_title}</Link>{' '}
        </li>
      ))}
    </List>
  );
};
export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

import { useState } from 'react';
import { Form } from './MoviesSearch.styled';

const MoviesSearch = ({ searchSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Enter a search name, please');
    }
    searchSubmit(query);
    setQuery('');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="query"
        value={query}
        type="text"
        placeholder="Search film"
      />
      <button type="submit"> Search </button>
    </Form>
  );
};
export default MoviesSearch;

import { useState } from 'react';
import { Form, Input, Button } from './MoviesSearch.styled';

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
      <Input
        onChange={handleChange}
        name="query"
        value={query}
        type="text"
        placeholder="Search film"
      />
      <Button type="submit"> Search </Button>
    </Form>
  );
};
export default MoviesSearch;

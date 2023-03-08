import {Form} from './MoviesSearch.styled'

const MoviesSearch = () => {
   return (
    <Form>
        <input type="text" placeholder="Search film"/>  
        <button type="submit"> Search </button>
    </Form>
   ) 
};
export default MoviesSearch;
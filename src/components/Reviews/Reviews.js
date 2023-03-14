import { ReviewsList} from './Reviews.styled';

const Reiwers = ({ data }) => {
  console.log(data);
  return (
    <ReviewsList>
      {data.map(({ id, author, content }) => {
        return <li key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </li>;
      })}
    </ReviewsList>
  );

};
export default Reiwers;

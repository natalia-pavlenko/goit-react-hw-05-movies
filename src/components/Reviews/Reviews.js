const Reiwers = ({ data }) => {
  console.log(data);
  return (
    <ul>
      {data.map(({ id, author, content }) => {
        return <li key={id}>
          <h4>{author}</h4>
          <p>{content}</p>
        </li>;
      })}
    </ul>
  );
  // const results = data.map(({ id, author, content }) => {
  //   return (
  //     <li key={id}>
  //       <h4>author: {author ? author : '...'}</h4>
  //       <p>{content ? content : '...'}</p>
  //     </li>
  //   );
  // });

  //  return <ul>{results}</ul>;
};
export default Reiwers;

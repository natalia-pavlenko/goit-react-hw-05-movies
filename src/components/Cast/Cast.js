import { CastList } from './Cast.styled';
const Cast = ({ data }) => {
// console.log(data);

    const results = data.map(item => {
    const { id, profile_path, original_name, character } = item;
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : `https://i.ibb.co/yQNvgQ7/1231313.jpg`
                }
                alt={original_name}  width="100" 
              />
              <p>
                <b>{original_name ? original_name : '...'}</b>
              </p>
              <p>{character ? character : '...'}</p>
            </li>
          );
        });
        return <CastList>{results}</CastList>;
    }
export default Cast;
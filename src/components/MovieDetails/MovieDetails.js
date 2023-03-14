import { Outlet } from 'react-router-dom';
import {
  PosterWrapper,
  MovieInfoDiv,
  PosterImg,
  MovieTitle,
  InfoTitles,
  InfoText,
  AddWrapper,
  AddInfo,
  AddList,
  AddListItem,
  LinkItem,
} from './MovieDetails.styled';

const MovieDetails = ({ data }) => {
  console.log(data);
  return (
    <>
      {data && (
        <MovieInfoDiv>
          <PosterWrapper>
            <PosterImg
              src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
              alt={data.title}
              width="250"
            />
          </PosterWrapper>
          <MovieTitle>
            {data.original_title} ({data.release_date.split('').slice(0,4).join('') })
          </MovieTitle>
          {/* {data && data.title} */}
          <InfoTitles>Overview</InfoTitles>
          <InfoText>{data.overview}</InfoText>
          <InfoTitles>Genres</InfoTitles>
          {data.genres.map(item => {
            return <p key={item.id}>{item.name}</p>;
          })}
        </MovieInfoDiv>
      )}
      <AddWrapper>
        <AddInfo>Additional information</AddInfo>
        <AddList>
          <AddListItem>
            <LinkItem to="cast">Cast</LinkItem>
          </AddListItem>
          <AddListItem>
            <LinkItem to="reviews">Reviews</LinkItem>
          </AddListItem>
        </AddList>

        <Outlet />
      </AddWrapper>
    </>
  );
};
export default MovieDetails;

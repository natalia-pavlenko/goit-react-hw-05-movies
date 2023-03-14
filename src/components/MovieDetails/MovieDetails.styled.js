import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeDiv = styled.div`
  padding: 10px 0;
`;
export const MovieInfoDiv = styled.div`
  gap: 20px;
  padding: 10px 10px 20px 10px;
  border-bottom: 1px solid #979797;
`;


export const PosterWrapper = styled.div`
  display: block;
  min-width: 400px;
`;

export const PosterImg = styled.img`
  border-radius: 10px;
`;
export const MovieTitle = styled.h2`
  font-size: 25px;
`;
export const InfoTitles = styled.p`
  font-size: 20px;
  font-weight: 700;
`;
export const InfoText = styled.p`
  font-size: 16px;
`;
export const AddWrapper = styled.div`
  border-bottom: 1px solid #979797;
  box-shadow: 0 2px 4px #cecccc;

`;
export const AddInfo = styled.p`
  font-size: 14px;
  padding-left: 15px;
`;
export const AddList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  border-bottom: 1px solid #979797;
  box-shadow: 0 1px 3px #cecccc;
  padding-bottom: 20px;
`;

export const AddListItem = styled.li`
  padding-left: 20px;
  font-size: 16px;
 
`;
export const LinkItem = styled(Link)`
  font-size: 16px;
`;
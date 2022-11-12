import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesDetailsMainWrapper = styled.div`
  border-bottom: 2px solid black;
`;

export const MoviesDetailsButton = styled(NavLink)`
  display: block;
  border: 1px solid transparency;
  width: 80px;
  text-align: center;
  text-decoration: none;
  color: black;
  margin: 30px;
  cursor: pointer;
  :hover {
    background-color: darkgrey;
  }
`;

export const MoviesDetailsWrapper = styled.div`
  display: flex;
  border-bottom: 2px solid black;
`;
export const MoviesInformationBox = styled.div`
  padding: 15px;
`;

export const MoviesDetailsList = styled.ul`
  list-style: none;
`;

export const MoviesDetailsGenres = styled.ul`
  list-style: none;
  margin-left: -40px;
`;

export const MoviesAditionalInformation = styled.div`
  padding: 15px;
  border-bottom: 2px solid black;
`;

export const MoviesAdditionalInformationList = styled.ul`
  list-style: none;
`;

export const MoviesAdditionalInformationItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

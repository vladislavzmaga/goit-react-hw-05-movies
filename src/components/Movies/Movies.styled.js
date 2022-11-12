import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesWrapper = styled.div`
  padding: 15px;
`;

export const MoviesInput = styled.input`
  margin-right: 20px;
`;

export const MoviesButton = styled.button`
  cursor: pointer;
  :hover {
    background-color: darkgrey;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
`;

export const MoviesItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const MoviesNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  :hover {
    background-color: darkgrey;
    color: white;
  }
`;

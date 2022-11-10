import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppBarBox = styled.div`
  padding: 15px;
  border-bottom: 2px solid black;
`;

export const AppBarList = styled.ul`
  display: flex;
  list-style: none;
`;

export const AppBarItem = styled.li`
  width: 100px;
  heigth: 40px;
  :not(:last-child) {
    margin-right: 50px;
  }
`;

export const AppBarLink = styled(NavLink)`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  text-align: center;
  border-radius: 4px;
  color: black;
  cursop: pointer;

  &.active {
    background-color: primary;
    color: red;
  }

  :hover:not(.active) {
    background-color: darkgrey;
    color: white;
  }
`;

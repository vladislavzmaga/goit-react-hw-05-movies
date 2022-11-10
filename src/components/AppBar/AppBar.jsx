// import { NavLink } from 'react-router-dom';
import { AppBarBox, AppBarLink, AppBarList, AppBarItem } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppBarBox>
      <header>
        <nav>
          <AppBarList>
            <AppBarItem>
              <AppBarLink to={'/'} end>
                Home
              </AppBarLink>
            </AppBarItem>
            <AppBarItem>
              <AppBarLink to={'movies'}>Movies</AppBarLink>
            </AppBarItem>
          </AppBarList>
        </nav>
      </header>
    </AppBarBox>
  );
};

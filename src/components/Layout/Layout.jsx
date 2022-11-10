import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { LayoutBox } from './Layout .styled';

export const Layout = () => {
  return (
    <LayoutBox>
      <AppBar />
      <Outlet />
    </LayoutBox>
  );
};

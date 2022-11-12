import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutBox } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutBox>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutBox>
  );
};

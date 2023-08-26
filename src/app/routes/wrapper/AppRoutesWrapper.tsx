import AppWrapper from '@components/layout/app-wrapper';
import Menu from '@routes/menu';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const AppRoutesWrapper = (): ReactElement => {
  return (
    <AppWrapper>
      <Menu />
      <Outlet />
    </AppWrapper>
  );
};

export default AppRoutesWrapper;

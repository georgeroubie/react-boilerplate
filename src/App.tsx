import React from 'react';
import AppWrapper from './app/components/layout/app-wrapper';
import Routing from './app/routing/Routing';
import Menu from './app/routing/menu/Menu';

const App = (): React.ReactElement => {
  return (
    <AppWrapper>
      <Menu />
      <Routing />
    </AppWrapper>
  );
};

export default App;

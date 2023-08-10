import AppWrapper from '@components/layout/app-wrapper';
import Routing from '@routing/Routing';
import Menu from '@routing/menu/Menu';
import { ReactElement } from 'react';

const App = (): ReactElement => {
  return (
    <AppWrapper>
      <Menu />
      <Routing />
    </AppWrapper>
  );
};

export default App;

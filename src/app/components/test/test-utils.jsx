import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { AppProvider } from '../../state/Context';
import Theme from '../../theme/Theme';
import AppWrapper from '../layout/AppWrapper';

const AllTheProviders = ({ children }) => {
  return (
    <HashRouter>
      <AppProvider>
        <Theme>
          <AppWrapper>{children}</AppWrapper>
        </Theme>
      </AppProvider>
    </HashRouter>
  );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };

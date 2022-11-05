import PropTypes from 'prop-types';
import { HashRouter } from 'react-router-dom';
import AppWrapper from '../app/components/layout/AppWrapper';
import { AppProvider } from '../app/state/Context';
import Theme from '../app/theme/Theme';

const TestWrapper = ({ children }) => {
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

TestWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TestWrapper;

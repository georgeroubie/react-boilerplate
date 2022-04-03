import PropTypes from 'prop-types';
import { HashRouter } from 'react-router-dom';
import { AppProvider } from '../app/state/Context';
import Theme from '../app/theme/Theme';

const TestWrapper = ({ children }) => (
  <HashRouter>
    <AppProvider>
      <Theme>{children}</Theme>
    </AppProvider>
  </HashRouter>
);

TestWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TestWrapper;

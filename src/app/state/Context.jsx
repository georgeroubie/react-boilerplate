import PropTypes from 'prop-types';
import { createContext } from 'react';
import { useAppState } from './store';

const AppContext = createContext();

const AppProvider = ({ children }) => <AppContext.Provider value={useAppState()}>{children}</AppContext.Provider>;

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider, AppContext };

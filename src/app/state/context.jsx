import PropTypes from 'prop-types';
import React from 'react';
import { useAppState } from './store';

const AppContext = React.createContext();

const AppProvider = ({ children }) => <AppContext.Provider value={useAppState()}>{children}</AppContext.Provider>;

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider, AppContext };

import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { AppContext } from '../state/Context';
import GlobalStyles from './styles';
import { darkTheme, DARK_THEME_KEY } from './themes/dark';
import { lightTheme } from './themes/light';

const Theme = ({ children }) => {
  const { state } = useContext(AppContext);
  const { theme } = state;
  const currentTheme = theme === DARK_THEME_KEY ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Normalize />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;

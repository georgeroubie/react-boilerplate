import baseTheme from './base';

const LIGHT_THEME_KEY = 'light';

const lightTheme = {
  ...baseTheme,
  colors: {
    backgroundPrimary: '#ffffff',
    backgroundSecondary: '#dedede',
    borderPrimary: '#000000',
    textPrimary: '#333333',
    successBackgroundPrimary: '#00bc8b',
    warningBackgroundPrimary: '#ffc200',
    warningTextPrimary: '#333333',
    dangerBackgroundPrimary: '#ed2e2e',
    dangerTextPrimary: '#ffffff',
    dangerBackgroundSecondary: '#ea3d3d',
  },
};

export { lightTheme, LIGHT_THEME_KEY };

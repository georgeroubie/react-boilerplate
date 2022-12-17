import baseTheme from './base';

const LIGHT_THEME_KEY = 'light';

const lightThemeColorValues = {
  blue: '#266dd3',
  blueLight: '#e1f2ff',

  green: '#00bc8b',
  greenLight: '#edf7ee',

  yellow: '#ffc200',
  yellowLight: '#fffcdc',

  red: '#ed2e2e',
  redLight: '#fff5f3',

  black: '#333333',

  grey: '#9b9b9b',
  greyLight: '#dfdfdf',
  greyLighter: '#f7f7f7',

  white: '#ffffff',
};

const colors = {
  background: lightThemeColorValues.greyLighter,
  backgroundSecondary: lightThemeColorValues.greyLight,
  surface: lightThemeColorValues.white,
  surfaceSecondary: lightThemeColorValues.black,
  successPrimary: lightThemeColorValues.green,
  successSecondary: lightThemeColorValues.greenLight,
  warningPrimary: lightThemeColorValues.yellow,
  warningSecondary: lightThemeColorValues.yellowLight,
  errorPrimary: lightThemeColorValues.red,
  errorSecondary: lightThemeColorValues.redLight,
  buttonPrimary: lightThemeColorValues.yellow,
  buttonPrimaryText: lightThemeColorValues.black,
  buttonSecondary: lightThemeColorValues.greyLighter,
  buttonSecondaryText: lightThemeColorValues.black,
  textPrimary: lightThemeColorValues.black,
  textSecondary: lightThemeColorValues.grey,
  textDisabled: lightThemeColorValues.greyLight,
  borderPrimary: lightThemeColorValues.greyLight,
  borderSecondary: lightThemeColorValues.grey,
  outline: lightThemeColorValues.yellowLight,
  backdrop: lightThemeColorValues.black,
  dividerPrimary: lightThemeColorValues.greyLighter,
};

const lightTheme = {
  ...baseTheme,
  colors,
};

export { lightTheme, LIGHT_THEME_KEY, lightThemeColorValues };

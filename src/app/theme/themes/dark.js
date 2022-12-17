import baseTheme from './base';

const DARK_THEME_KEY = 'dark';

const darkThemeColorValues = {
  blue: '#4cc0f0',
  blueLight: '#e1f2ff',

  green: '#00bc8b',
  greenLight: '#edf7ee',

  yellow: '#ffc200',
  yellowLight: '#fffcdc',

  red: '#ff606A',
  redLight: '#fff5f3',

  black: '#171717',
  blackLight: '#212121',
  blackLightest: '#353535',

  grey: '#9b9b9b',
  greyLighter: '#dfdfdf',
};

const colors = {
  background: darkThemeColorValues.black,
  backgroundSecondary: darkThemeColorValues.greyLighter,
  surface: darkThemeColorValues.blackLight,
  surfaceSecondary: darkThemeColorValues.greyLighter,
  successPrimary: darkThemeColorValues.green,
  successSecondary: darkThemeColorValues.greenLight,
  warningPrimary: darkThemeColorValues.yellow,
  warningSecondary: darkThemeColorValues.yellowLight,
  errorPrimary: darkThemeColorValues.red,
  errorSecondary: darkThemeColorValues.redLight,
  buttonPrimary: darkThemeColorValues.green,
  buttonPrimaryText: darkThemeColorValues.black,
  buttonSecondary: darkThemeColorValues.blackLightest,
  buttonSecondaryText: darkThemeColorValues.greyLighter,
  textPrimary: darkThemeColorValues.greyLighter,
  textSecondary: darkThemeColorValues.grey,
  textDisabled: darkThemeColorValues.blackLightest,
  borderPrimary: darkThemeColorValues.greyLighter,
  borderSecondary: darkThemeColorValues.grey,
  outline: darkThemeColorValues.greyLighter,
  backdrop: darkThemeColorValues.black,
  dividerPrimary: darkThemeColorValues.greyLighter,
};

const darkTheme = {
  ...baseTheme,
  colors,
};

export { darkTheme, DARK_THEME_KEY, darkThemeColorValues };
